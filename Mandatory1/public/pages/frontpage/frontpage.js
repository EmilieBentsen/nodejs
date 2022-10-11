
const contentButton = document.getElementById("content");
const postDiv = document.getElementById("post");
const postButton = document.getElementById("submit");
const postInput = document.getElementById("input");
const postInputTitle = document.getElementById("inputTitle");
const postInputSubject = document.getElementById("inputSubject");
//const uploadButton = document.getElementById("upload")
//const imgInput = document.getElementById("imgInput");


const baseUrl = "http://localhost:8080/"
//contentButton.addEventListener("click", getContent);
postButton.addEventListener("click", postContent);
//uploadButton.addEventListener("click", uploadImg);


//let pageLoaded = 0;
let latestPost = {};
contentArray = []
/*
async function getContent(e){
    e.preventDefault()
   if(pageLoaded === 0){
        const res = await fetch(baseUrl+ "api/content", 
        {
            method: "GET"
        })
        pageLoaded = 1;
        console.log("TEST");
        console.log(res.json);
        const data = await res.json()
        contentArray = data;
        contentArray.forEach(post => {
            const postIndividualDiv = document.createElement("div");        
            const postTitle = document.createElement("h1");
            const postMessage = document.createElement("p")
            const postImg = document.createElement("img");
            postMessage.setAttribute("id", "content");
            postTitle.innerText = post.title;
            postMessage.innerText = post.message;
            postImg.src = post.img;
            postIndividualDiv.appendChild(postTitle);
            postIndividualDiv.appendChild(postMessage);
            postIndividualDiv.appendChild(postImg);
            postDiv.appendChild(postIndividualDiv);})
   } else{
        const res = await fetch(baseUrl+ "api/content", 
        {
            method: "GET"
        })
        const data = await res.json()
        const postIndividualDiv = document.createElement("div");        
        const postTitle = document.createElement("h1");
        const postMessage = document.createElement("p")
        postMessage.setAttribute("id", "content");
        postTitle.innerText = latestPost.title;
        postMessage.innerText = latestPost.message;
        postIndividualDiv.appendChild(postTitle);
        postIndividualDiv.appendChild(postMessage);
        postDiv.appendChild(postIndividualDiv);
   }


}*/
async function postContent(e){
    e.preventDefault()
    if(postInput.value === ''){return}
    const res = await fetch(baseUrl, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: postInput.value,
                title: postInputTitle.value,
                subject: postInputSubject.value
            })
            
        })
        location.reload();
        //latestPost = { title: "En titel", message: postInput.value};

}
async function uploadImg(e){
    e.preventDefault()
    const file = imgInput.files[0];
    const formData = new FormData();
    formData.append('file', file, 'file.jpg')
    fetch(baseUrl+"upload", 
    {
            method: "POST",

            body: formData
       
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


}


        



