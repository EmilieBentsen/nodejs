//ikke procedual execution
// hoisting, når den kompilerere går den igennem hele file, og hoisteer funtioner sår de går i memory state,
//deklarationer bliver hoisted
//console.log(add(5,28));

function add(a,b) {
    return a + b;
}

    // anonymous function after the equal sign.. does not have a name
const addAnonymousFunction = function (a,b){
    return a + b;
};
//vi kan have funktioner som variabel
//parametre. 
//arrowfunction er uden functions deklarerationen men så med en arrow efter deklerationen
const addArrowFunction = (a,b) => {
    return a+b;
}

//implicit return ingen klammr
const addarrowFunctionCompact = (a,b) => a+b;

//console.log(addAnonymousFunction(3,6));
//console.log(addArrowFunction(3,6));
//console.log(addarrowFunctionCompact(3,6));
//hold den samme funktion stil og kode stil

function genericActionExecutor(anyCallbackFunction, name){

    return anyCallbackFunction(name);
    
}

//const functionsReference = add;
//const functionAdd = add();

//console.log(add(2,5));
//console.log(add);

const spitting = (name) => `${name} is spitting.`;

const shooting = (name) => `${name} is shooting.`;

console.log(genericActionExecutor(shooting, "Malte"));


console.log(genericActionExecutor(running = (name) => `${name} is running.`,"Murrat"));



