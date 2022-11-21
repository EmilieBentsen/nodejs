<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../store/globals.js";
  let users = [];

  async function fetchUsers() {
    const response = await fetch(`${$BASE_URL}/api/users`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        accept: 'application/json',
        "Access-Control-Allow-Origin": "*"
      },    });
    const data = await response.json();
    users = data.data;

  }
  onMount(fetchUsers);

</script>

{#each users as user}
  <p>{user.email} {user.password}</p>
{/each}

<h1>Users</h1>
