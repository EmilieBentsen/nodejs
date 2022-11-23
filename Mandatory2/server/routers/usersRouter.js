import { Router } from "express";
const router = Router();
import db from "../database/connection_sqlite.js";
import bcrypt from "bcryptjs"

import rateLimit from "express-rate-limit";

import { sendEmail } from "../mail_service/send_mail.js";


const generalLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80
});

router.use(generalLimiter);

const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 6 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


router.post("/api/login", async (req, res) => {
    const email = req.body.useremail;
    const password = req.body.userpass;
    
    const data = await db.all("SELECT * FROM users;");
    console.log("data:")
    console.log(data);
    const result = data.filter(user => user.email === email);
    console.log("Result: ")
    console.log(result);


    if(result.length === 1){
        const passwordMatch = await bcrypt.compare(password, result[0].password);
        console.log("passwordmatch " + passwordMatch)
        if(passwordMatch){
            console.log("email and password in database")
            req.session.loggedIn = 'yes';
        }
        else{
            req.session.loggedIn = 'no';
        }
    } else {
        console.log("email and password not in database")
        
    }
    
    
    res.send({ loggedIn: req.session.loggedIn });    
    
});

router.get("/api/login", async (req, res) => {
    if(req.session.loggedIn === undefined){
        req.session.loggedIn = 'no';
    }
    console.log("fromt get api login " + req.session.loggedIn)
    res.send({ loggedIn: req.session.loggedIn });
}); 

router.post("/api/logout", async (req, res) => {
 
    req.session.loggedIn = req.body.loggedIn
    res.send({ loggedIn: req.session.loggedIn });
}); 

router.post("/api/signup", async (req, res) => {
    const email = req.body.useremail;
    const password = req.body.userpass;
    
    const users = await db.all("SELECT * FROM users;");
    console.log(users);
    const result = users.filter(user => user.email === email)
    let tryAgain = null;
    if(result.length === 0){
        console.log("new user added to db")
        const salt = await bcrypt.genSalt(15)
        const newHashedPassword = await bcrypt.hash(password, salt)
        const resultDB = await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, newHashedPassword]);
        console.log(resultDB);
        tryAgain = false;
        sendEmail(email, "Thank you for signing up!", "We are so happy that you want to be a part of klimateket!")
    } else {
        console.log("email and password already in database")
        tryAgain = true;
    }
    
    
    res.send({ tryAgain: tryAgain});    
    
});



export default router;