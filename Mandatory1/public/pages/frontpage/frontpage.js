const postButton = document.getElementById("submit");
const postInput = document.getElementById("input");
const postInputTitle = document.getElementById("inputTitle");
const postInputSubject = document.getElementById("inputSubject");

const baseUrl = "http://localhost:8080/"
postButton.addEventListener("click", postContent);

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
}






        



