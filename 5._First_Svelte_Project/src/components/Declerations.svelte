<script>
	let count = 0;
	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>
<p>7. Declerations</p>
<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>