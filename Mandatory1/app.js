import express from "express";
import { renderPage } from "./util/templateEngine.js";
import fs from "fs";
import apiRouter from "./routers/apiRouter.js";

const app = express();
app.use(apiRouter);

app.use(express.static("public"));
app.use(express.json());

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Node js facts", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`, 
    content: "",
    title: "",
    subject: "",
});

const loginPage = renderPage("/login/login.html", {
    tabTitle: "Login page",
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`,
    content: "",
    title: "",
    subject: "",
});

app.get("/", (req, res) => {
    
    fs.readFile("./user/user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
        }
        console.log("File data:", jsonString);
        const user = JSON.parse(jsonString);

        if (user.loggedIn){
            res.send(frontpagePage);
        } else {
            res.send(loginPage);
        }
      });
      
});

app.post('/', (req, res) => {
    const { message } = req.body;
    const { title } = req.body;
    const { subject } = req.body;
    
    fs.writeFile(`public/pages/contribute/${subject}.html`,renderPage("/template/template.html", 
    { 
        tabTitle: subject, 
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`, 
        content: message,
        subject: subject,
        title: title,
    }), (error) => {if(error){return error}});

    res.redirect("/");
});

app.get("/logout", (req, res) =>{
    const userTrue = {
        "username": "Admin",
        "password": "1234",
        "loggedIn": false
    }
    const jsonString = JSON.stringify(userTrue)
    fs.writeFile('./user/user.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file /login')
        }
    });
    res.redirect("/");
});


app.post("/login", (req, res) =>{
    const { username } = req.body;
    const { password } = req.body;

    fs.readFile("./user/user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
        }
        console.log("File data:", jsonString);
        const user = JSON.parse(jsonString);

        if(username === user.username && password === user.password){

            const userTrue = {
                "username": "Admin",
                "password": "1234",
                "loggedIn": true
            }
            const jsonString = JSON.stringify(userTrue);
            fs.writeFile('./user/user.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully wrote file /login');
            }
            })
    
            res.redirect("/");
        } else {
            res.redirect("/");
        }
        
      });

});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});