<script>
  import { Router, Link, Route } from "svelte-navigator";

  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/login.svelte";
  import Logout from "./pages/SignUp/signup.svelte";
  import Users from "./pages/Users/users.svelte";
  import Profile from "./pages/Profile/profile.svelte";
  import { BASE_URL } from "./store/globals.js";
  import { onMount } from "svelte/internal";
  import Signup from "./pages/SignUp/signup.svelte";

  let loggedIn = null;
  async function fetchLogin() {
    fetch(`${$BASE_URL}/api/login`, {
      withCredentials: true,
      credentials: 'include',
      method: 'GET',
      //credentials: 'same-origin',
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }} ).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      loggedIn = data.loggedIn;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  async function logout () {
    fetch(`${$BASE_URL}/api/logout`, {
    method: 'POST', // or 'PUT'
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({loggedIn: 'no'}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      loggedIn = data.loggedIn;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      
	}

  onMount(fetchLogin);
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/users">Users</Link>
    {#if loggedIn === 'yes'}
    <Link to="/profile">Profile</Link>
    <Link to="/logout" on:click={logout}>Loguot</Link>
    {/if}
  </nav>  
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup/></Route>
    <Route path="/users"><Users /></Route>
    <Route path="/profile"><Profile /></Route>
    <Route path="/logout"><Home /></Route>

  </div>
</Router>
