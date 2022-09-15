'use strict';
/*
malte = "Malte";
var malte = "Malte";
//reaklere
var malte = "Malte";
//let kan ikke reakleres, var er en global variable, det handler om scope, vi har adgang globalt og vi kan overskrive globalt
totalGlobalVariable = "Malte";
//never use var eller totalGlobal*/

//variable decleration
//vi kan ikke reasigne const, ikke konstant, det handler ikke om at værdien ikke kan ændre sig, ændre værdier ikke asignment
// ikke imutable med assaingment
const me = {
    name: "Anders"
};

const hobbies = [];
hobbies.push("Music");
me.hobbies = hobbies;
console.log(me);

//nyt scope, funktion
//true, fordi let er local
/*{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}*/
//false, var er global den propigator ud af sit scope
/*{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}*/

//et sekund pause og så printer den i ud, i er global og lever uden for scopet
// skriv let i stedet for var
/*for (var i = 0; i < 5; i++){
    setTimeout(() =>{
        console.log(i);
    }, 1000);
}*/




