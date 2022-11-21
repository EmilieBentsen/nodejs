<script>
    import { BASE_URL } from "../../store/globals.js";
    import { emailValidator, requiredValidator } from './validators.js'
    import { createFieldValidator } from './validation.js'
    import { Router, Route, Link } from "svelte-navigator";
    import Profile from "../Profile/profile.svelte";
    import Home from "../Home/Home.svelte";
    import z from 'zxcvbn'

    const [ validity, validate ] = createFieldValidator(requiredValidator(), emailValidator())

    let passwordValid = null;
	let email = ''
	let password = ''
    let result = ''

    let strength = 0;
	let validations = []

	function validatePassword(e) {
        passwordValid = false;
		const password = e.target.value

		validations = [
			(password.length > 5),
			(password.search(/[A-Z]/) > -1),
			(password.search(/[0-9]/) > -1),
			(password.search(/[&+,:;=?@#-]/) > -1)
		]

		strength = validations.reduce((acc, cur) => acc + cur )
    
        if(strength == 4){
            passwordValid = true;
            console.log(passwordValid);
        }
        
        
	}
    


    $: s = z(password).score > 3
	

	async function login () {
    fetch(`${$BASE_URL}/api/login`, {
    method: 'POST', // or 'PUT'
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({useremail: email, userpass: password}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      console.log('LoggedIn ' + data.loggedIn)
      if(data.loggedIn === 'yes'){
        window.location.href = 'http://localhost:5174/profile';
      }else{
        window.location.href = 'http://localhost:5174/login';
      }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
        
		// const json = await res.json()
		// result = JSON.stringify(json)
    //     console.log(result);
    
		
	}

</script>

<h4>For admission use the turnpike.</h4>

<form action="/profile" method="post">
  <div class="imgcontainer">
    <img src="/earth.png" alt="Avatar" class="avatar" />
  </div>

  <div class="container">
    <label for="email"><b>Email</b></label>
    <input
        bind:value={email}
      id="email"
      type="email"
      placeholder="Enter Email"
      name="email"
      required
      class:field-danger={!$validity.valid}
      class:field-success={$validity.valid}
        use:validate={email}
    />



    <label for="psw"><b>Password</b></label>
    <input
    bind:value={password}
    on:input={validatePassword}
      id="password"
      type="password"
      placeholder="Enter Password"
      name="psw"
      required
    />

    <div class="strength">
        <span class="bar bar-1" class:bar-show={strength > 0}/>
        <span class="bar bar-2" class:bar-show={strength > 1}/>
        <span class="bar bar-3" class:bar-show={strength > 1}/>
        <span class="bar bar-4" class:bar-show={strength > 3}/>
    </div>

    <ul>
        <li> {validations[0] ? '✔️' : '❌'} must be at least 5 characters</li>
        <li> {validations[1] ? '✔️' : '❌'} must contain a capital letter</li>
        <li> {validations[2] ? '✔️' : '❌'} must contain a number</li>
        <li> {validations[3] ? '✔️' : '❌'} must contain one of $&+,:;=?@#-</li>
    </ul>
    
    <p style={s||'color:red'}>
        {s ? 'Strong' : 'Weak'} password
      </p>

      <button type="submit" id="loginButton" on:click={login}>Login</button>
      <!--{#if $validity.valid && passwordValid}
      <a href="/login" type="submit" id="loginButton" on:click={login}>Login</a>
      {:else}
      <a href="/login" type="submit" id="loginButton">Login</a>
      {/if}-->
      
    
        
    
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
  </div>
</form>

{#if $validity.dirty && !$validity.valid}
<span class="validation-hint">
INVALID - {$validity.message} {$validity.dirty}
</span>
{/if}



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
  }

  /* Set a style for all buttons */
  button {
    background-color: #04aa6d;
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
    width: 40%;
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
