<script>
	let count = 0;

	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>
<p>8. Statements</p>
<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>