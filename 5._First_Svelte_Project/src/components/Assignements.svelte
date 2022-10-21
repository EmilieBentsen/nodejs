<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>
<p>6. Assignements</p>
<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>