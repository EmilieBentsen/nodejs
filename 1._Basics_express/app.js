const express = require("express");
//vi instantierer serveren
const app = express();
//det første den tager imod er endpointet, nu vil vi implementerer en root
//andet argument er en callback funktion der tager imod to argumenter req og res
app.get("/", (request, response) => {

    response.send({message: "Created my first route. Check"});

});

app.listen(8080);

