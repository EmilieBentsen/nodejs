import express from "express";
import { renderPage, injectData } from "./util/templateEngine.js";
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
});

let files = [];

let newfile = true;
let user = {
    username: "Admin",
    password: "SecretPassword123",
    loggedIn: false
}

app.get("/", (req, res) => {
  

    res.send(frontpagePage);
    
 
});



app.get("/api", (req, res) => {
    
    if(newfile){
        const filesupdated = [];
        const dir = './public/pages/contribute'
        const filesDir = fs.readdirSync(dir)
    
        for (let file of filesDir) {
            const jsonFile = file;
            filesupdated.push(jsonFile);
        console.log(file)
        } 
        files = filesupdated;
        newfile = false;
    }
    res.json(files);

});

/*app.get("contribute/:id", (req, res) =>{

    res.send(renderPage(req.params.id, {
        tabTitle: "New Site", 
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` 
    }))
})*/

/*app.get("/api/content", (req, res ) => {

    res.json(posts);
    
    console.log("test");
});*/

/*app.get("/contribute/post", (req, res) => {
    res.send(req.params.id)
})*/


app.post('/', (req, res) => {
    const { message } = req.body
    const { title } = req.body
    const { subject } = req.body
    console.log(message + title);
    posts.push({title: title, message: message})
    if(!message){
        return res.status(400).send({ status: "failed"});
    }
    fs.writeFile(`public/pages/contribute/${subject}.html`,renderPage("/template/template.html", 
    { 
        tabTitle: subject, 
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`, 
        content: message,
        subject: subject,
        title: title
    }), (error) => {if(error){return error}});
    res.status(200).send({ status: "received"});
    newfile = true;


});

app.post('/upload', (req, res) =>{


    res.sendStatus(200);
})


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});