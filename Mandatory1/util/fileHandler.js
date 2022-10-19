import fs from "fs";
export function writeFile(path, content){
    fs.writeFile(path, content, (error) => {if(error){return error}})
}

export function readFile(pathToFile, encoding){
    
    fs.readFile(pathToFile, encoding, (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
        }
        console.log("File data:", jsonString);
        const user = JSON.parse(jsonString);
        return user;
      });
    
}