import express from "express";
import { renderPage } from "./util/templateEngine.js";
import fs from "fs";

const app = express();

app.use(express.static("public"));
app.use(express.json());

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Node js facts", 
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`, 
    content: "",
    title: "",
    subject: "",
    logout: ""
});

const loginPage = renderPage("/login/login.html", {
    tabTitle: "Login page",
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`,
    content: "",
    title: "",
    subject: "",
    logout: ""
});

let files = [];
let newfile = true;


app.get("/", (req, res) => {
    
    fs.readFile("./user/user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        const user = JSON.parse(jsonString);

        if (user.loggedIn){
            res.send(frontpagePage);
            console.log("logged in");
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
        logout: ""
    }), (error) => {if(error){return error}});

    newfile = true;
    user.loggedIn = true;
    res.redirect("/");
});

app.get("/logout", (req, res) => {
    const userFalse = {
        "username": "Admin",
        "password": "1234",
        "loggedIn": false
    }
    const jsonString = JSON.stringify(userFalse)
    fs.writeFile('./user/user.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
        res.redirect("/");
    }
    })
    



});

app.post("/login", (req, res) =>{
    const { username } = req.body;
    const { password } = req.body;

    const userTrue = {
        "username": "Admin",
        "password": "1234",
        "loggedIn": true
    }

    fs.readFile("./user/user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        const user = JSON.parse(jsonString);

        if(username === user.username && password === user.password){

            const jsonString = JSON.stringify(userTrue)
            fs.writeFile('./user/user.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
            })
    
            res.redirect("/");
        } else {
            res.redirect("/");
        }
        
      });



});

app.get("/api", (req, res) => {

    if(newfile){
        const filesupdated = [];
        const dir = './public/pages/contribute'
        const filesDir = fs.readdirSync(dir)
    
        for (let file of filesDir) {
            const jsonFile = file;
            filesupdated.push(jsonFile);
        } 
        files = filesupdated;
        newfile = false;
    }
    res.json(files);

});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});