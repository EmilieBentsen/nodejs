const navDiv = document.getElementById("navbar");
baseUrlNav = "http://localhost:8080/";
window.addEventListener("load", getFiles)
window.addEventListener('load', (event) => {

    console.log("page fully loaded");
});
async function getFiles(e){
    e.preventDefault()
    const res = await fetch(baseUrlNav + "api", 
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
        newHref.href = `/test`;
        newHref.innerText = `${file}`;
        navDiv.appendChild(newHref);
       

    });
};
