<script>
    let date = new Date();
    let dates = [date];

    function updateDate(){
        console.log("Update date");
        date = new Date()
        dates = [...dates,date];
    }
</script>
<div>Current date {date}</div>

//template string
<button on:click={updateDate}>Update Date</button>
<div>{JSON.stringify(dates)}</div>