//require er nodes måde at importere
import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";
//import packageJSON from "./package.json"

import { incrementVisitorCounter } from "./geocitiesUtil.js";

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter());
    res.sendFile(path.resolve("./public/frontpage.html"));
    // cant use dirname with type modules res.sendFile(__dirname + "/public/frontpage.html");
});
//console.log(path.resolve("./public/frontpage.html"))

//klient laver request server sender et response
//Import og export 

app.listen(8080, () => console.log("Server is running in port", 8080));