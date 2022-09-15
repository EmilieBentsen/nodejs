import express from "express";
const app = express();


app.use(express.json());

let arrayOfWeapons = [{
    id: 1,
    name: "Gun",
    damage: 8
},{
    id: 2,
    name: "sword",
    damage: 6
},
{
    id: 3,
    name: "knife",
    damage: 4
},
{   
    id: 4,
    name: "nunchaku",
    damage: 9
},
{   
    id: 5,
    name: "harpoon",
    damage: 10
}];

let lastId = arrayOfWeapons.length;

app.get("/weapons", (req, res) => {
    res.send({ data: arrayOfWeapons});
    
});

app.get("/weapons/:id", (req, res) => {
    const weapon = arrayOfWeapons.find(weapon => weapon.id === Number(req.params.id))
    if(!weapon) {
        return res.send("The weapon with the given id was not found");
    };
    res.send(weapon);
});

app.post("/weapons", (req, res) => {
    const data = req.body;
    lastId = lastId+1;
    const weapon = {id: lastId, name: data.name, damage: data.damage}
    arrayOfWeapons.push(weapon);
    res.send({ data: arrayOfWeapons});
   
});

app.delete("/weapons/:id", (req, res) => {
    const weapons = arrayOfWeapons.filter(weapon => weapon.id !== Number(req.params.id))
    console.log(weapons);
    arrayOfWeapons = weapons;
    res.send({ data: arrayOfWeapons});
    
});
app.put("/weapons/:id", (req, res) => {
    const data = req.body;
    const weapons = arrayOfWeapons.map(weapon => {
        if(weapon.id === Number(req.params.id)){
            weapon.name = data.name;
            weapon.damage = data.damage;
            return weapon;
        }
        else{
            return weapon;
        }
    });
    arrayOfWeapons = weapons;
    res.send({ data: arrayOfWeapons});
});

app.patch("/weapons/:id", (req, res) => {
    const data = req.body;
    const weapons = arrayOfWeapons.map(weapon => {
        if(weapon.id === Number(req.params.id) & !data.damage){
            weapon.name = data.name;
            return weapon;
        }
        else if(weapon.id === Number(req.params.id) & !data.name){
            weapon.damage = data.damage
            return weapon;
        }
        else{
            return weapon;
        }
    });
    arrayOfWeapons = weapons;
    res.send({ data: arrayOfWeapons});
});


app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});