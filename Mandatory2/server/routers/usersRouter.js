import { Router } from "express";
const router = Router();
import db from "../database/connection_sqlite.js";

import rateLimit from "express-rate-limit";


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

router.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
});

router.post("/api/users", async (req, res) => {
    const email = req.body.email || "Unknown";
    const password = req.body.password;
    if (!password) return res.status(400).send({ message: "password not defined" });
    console.log("hi from api/users");
    const result = await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password]);

    res.send({ changes: result.changes });
});

router.post("/api/login", async (req, res) => {
    const email = req.body.useremail;
    const password = req.body.userpass;
    
    const data = await db.all("SELECT * FROM users;");

    const result = data.filter(user => user.email === email && user.password === password)
    
    if(result.length === 1){
        console.log("email and password in database")
        req.session.loggedIn = 'yes';
    } else {
        console.log("email and password not in database")
        req.session.loggedIn = 'no';
    }
    
    
    res.send({ loggedIn: req.session.loggedIn });    
    
});

router.get("/api/login", async (req, res) => {
    if(req.session.loggedIn === undefined){
        req.session.loggedIn = 'no';
    }
    res.send({ loggedIn: req.session.loggedIn });
}); 

router.post("/api/logout", async (req, res) => {
 
    req.session.loggedIn = req.body.loggedIn
    res.send({ loggedIn: req.session.loggedIn });
}); 

export default router;