<script>
  import { BASE_URL } from "../../store/globals.js";
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

	let email = ''
	let password = ''
  let n
  
  async function login () {
    fetch(`${$BASE_URL}/api/login`, {
    method: 'POST', 
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({useremail: email, userpass: password}),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
      console.log('LoggedIn ' + data.loggedIn)
      if(data.loggedIn === 'yes'){
        window.location.href = 'http://localhost:5173/profile'
        notifier.success('Hello! Login succesfull', 7000)
        
      }else{
        notifier.danger('User unknown, maybe you typed invalid email or password', 7000)

        window.location.href = 'http://localhost:5173/login'
      }
      })
    .catch((error) => {
      console.error('Error:', error);
    });
  
	}

</script>
<NotificationDisplay bind:this={n}/>


  <div class="imgcontainer">
    <img src="/earth.png" style="size: 10px" alt="Avatar" class="avatar" />
  </div>
  <h4>Login to Klimateket</h4>
  <div class="container">
    <label for="email"><b>Email</b></label>
    <input
      bind:value={email}
      id="email"
      type="email"
      placeholder="Enter Email"
      name="email"
      required
    />

    <label for="psw"><b>Password</b></label>
    <input
      bind:value={password}
      id="password"
      type="password"
      placeholder="Enter Password"
      name="psw"
      required
    />
    <button type="submit" id="loginButton" on:click={login}>Login</button>
      
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>
<body></body>


  

<style>
	
    .validation-hint {
		color: red;
		padding: 6px 0;
	}
	
	.field-danger {
		border-color: red;
	}
	
	.field-success {
		border-color: green;
	}
  /* Bordered form */
  form {
    border: 3px solid #f1f1f1;
  }

  /* Full-width inputs */
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: white;
    color: black;
  }

  /* Set a style for all buttons */
  button {
    background-color: #646cff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }

  /* Center the avatar image inside this container */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }

  /* Avatar image */
  img.avatar {
    width: 20%;
    border-radius: 50%;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
  }

  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }

  }
</style>
