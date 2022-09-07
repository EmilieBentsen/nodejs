const app = require("express")();

const arrayOfWeapons = [{
    name: "Gun",
    damage: 8
},{
    name: "sword",
    damage: 6
},
{
    name: "knife",
    damage: 4
}];

app.get("/weapons", (req, res) => {
    res.send(arrayOfWeapons);

});

app.get("/weapons/:id", (req, res) => {
    
    res.send(arrayOfWeapons[Number(req.params.id)]);
    
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});