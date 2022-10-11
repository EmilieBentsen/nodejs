//import
//const express = require("express");
const app = require("express")();
//vi instantierer the library express serveren
//const app = express();
//det første den tager imod er endpointet, nu vil vi implementerer en root
//andet argument er en callback funktion der tager imod to argumenter req og res, vi laver en route
//route       // en callback funktion
/*app.get("/", (request, response) => {
    response.send({message: "Created my first route. Check"});
});
        //endpoint
app.get("/deers", (req, res) => {
    res.send({ size: "BIG" });

});
//bare et metode kald
app.get("/deers/:id", (req, res) => {
    console.log(req.params.id);
    if (Number(req.params.id) === 1){
        res.send({name: "Bambi", theBestAndOGDeer: true});
        
    } else {
        res.send({ errorMessage: "I dont know that deer"});
    }
});*/

/*app.get("/actors", (req, res) => {
    console.log(req.query.name);
    res.send({
        message: "Information about the actor",
        ...req.query
    });
});

app.get("/cups", (req, res) => {
    res.send({ full: false })
});*/

app.get("/lookunderbed", (req, res) =>
{
    if(req.query.flash){
        res.send({message: "you are safe"})
    } else {
        res.redirect("/monsters");
    }
    
    //res.send({ message: "Look under the bed"});
})

app.get("/monsters", (req, res) => {
    res.send({message: "The scary monster"});
})

app.listen(8080, () => {
    console.log("server is runing on port", 8080);
});

// ways to send data with GET
//this also works for alle HTTP methods
//1.
// path variables
// /deers/{id}

//2.
// query parameters (query string), hvis noget skal filtreres på en hjemmeside, 
//mere dynamisk, mange kombinationer, man kan dele et søgelink, det kan man ikke med post
// /deers?key=value&key2=value2
// path

//forskel mellem get og post
//man laver en ny ressource med post, man kan sagtens sende data med get. 
// en undtagelse hvor man laver en post, der ikke bliver gemt, login, ikke get fordi ellers ville den
//gemme vores login i url
//url skal kende endpoint det er altid plain text. Der er et sikkerheds aspekt

//entry point er package.json
