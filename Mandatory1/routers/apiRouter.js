import { Router } from "express";
import fs from "fs";
const router = Router();

router.get("/api/getUserData", (req, res) => {
    
    fs.readFile("./user/user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
    console.log("File data:", jsonString);
    const user = JSON.parse(jsonString);
    const userArray = [user]
    res.json(userArray);
    });
    
});

router.get("/api/getFIles", (req, res) => {

    const filesupdated = [];
    const dir = './public/pages/contribute'
    const filesDir = fs.readdirSync(dir)

    for (let file of filesDir) {
        const jsonFile = file;
        if(jsonFile !== ".DS_Store")
        {
            filesupdated.push(jsonFile);
        }
    } 
    res.json(filesupdated);

});

export default router;