<script>
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
	import { onDestroy, onMount } from "svelte/internal"

	let n
	

	
	
    
</script>
<h1 >Terms & Privacy</h1>
<button on:click={() => { notifier.info('Read about our terms and privacy!', 7000) }}>Terms & Privacy</button>
<NotificationDisplay bind:this={n}/>
<body></body>