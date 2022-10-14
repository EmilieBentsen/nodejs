const loginButton = document.getElementById("loginBtn");
const loginUsername = document.getElementById("username");
const loginPassword = document.getElementById("password");

loginButton.addEventListener("click", login);
const baseUrl = "http://localhost:8080/"

async function login(e){
    e.preventDefault()
    if(loginUsername.value === ''){return}
    console.log("test1");
    const res = await fetch(baseUrl + "login", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginUsername.value,
                password: loginPassword.value,
            })
            
        })
        location.reload();
}