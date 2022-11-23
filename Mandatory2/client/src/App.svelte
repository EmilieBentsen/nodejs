<script>
  import { Router, Link, Route } from "svelte-navigator"
  import Home from "./pages/Home/Home.svelte"
  import Login from "./pages/Login/login.svelte"
  import Profile from "./pages/Profile/profile.svelte"
  import { BASE_URL } from "./store/globals.js"
  import { onMount } from "svelte/internal"
  import Signup from "./pages/SignUp/signup.svelte"
  import Terms from "./pages/Terms/terms.svelte"
  import Footer from "./components/Footer/Footer.svelte";


  let loggedIn = null;
  async function getAuthStatus() {
    fetch(`${$BASE_URL}/api/login`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }} ).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
      loggedIn = data.loggedIn
    })
    .catch((error) => {
      console.error('Error:', error)
    });
  }

  async function logout () {
    fetch(`${$BASE_URL}/api/logout`, {
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({loggedIn: 'no'}),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
      loggedIn = data.loggedIn
    })
    .catch((error) => {
      console.error('Error:', error)
    });
      
	}
  onMount(getAuthStatus)
</script>

<Router>
  <nav>
    
    {#if loggedIn === 'no'}
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    {/if}
    {#if loggedIn === 'yes'}
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/" on:click={logout}>Loguot</Link>
    {/if}
  </nav> 

  <div>
    <Route path="/"><Home /></Route>
    <Route path="/terms"><Terms/></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup/></Route>
    {#if loggedIn === 'yes'}
    <Route path="profile"><Profile /></Route>
    {/if}
    
  </div>
  <Footer/>
</Router>

<style>

</style>