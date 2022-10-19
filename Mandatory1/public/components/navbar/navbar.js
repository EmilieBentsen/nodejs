const navDiv = document.getElementById("navbar");

baseUrlNav = "http://localhost:8080/";
window.addEventListener("load", getFiles)
window.addEventListener("load", loggedIn)
window.addEventListener('load', (event) => {

    console.log("page fully loaded");
});

async function getFiles(e){
    e.preventDefault()
    const res = await fetch(baseUrlNav + "api/getFiles", 
    {
        method: "GET"
    })
    pageLoaded = 1;
    console.log(res.json);
    const data = await res.json()
    contentArray = data;
    contentArray.forEach(file => {
        const newHref = document.createElement("a")
        //${file.filename}
        newHref.href = `http://localhost:8080/pages/contribute/${file}`;
        const filename = file.split('.')[0];
        newHref.innerText = `${filename}`;
        navDiv.appendChild(newHref);
       
    });
};

async function loggedIn(e){
    e.preventDefault()
    const res = await fetch(baseUrlNav + "api/getUserData", 
    {
        method: "GET"
    })
    console.log(res.json);
    const data = await res.json()
    contentArray = data;
    const logout = contentArray[0];
    console.log(logout.loggedIn)
    if(logout.loggedIn){
        const newHref = document.createElement("a")
        newHref.href = "/logout";
        newHref.innerText = "LOG OUT";
        newHref.style = "float: right;"
        navDiv.appendChild(newHref);
    }
    else{
        const newHref = document.createElement("a")
        newHref.href = "/";
        newHref.innerText = "LOGIN";
        newHref.style = "float: right;"
        navDiv.appendChild(newHref);
    }
};

