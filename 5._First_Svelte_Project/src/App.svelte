<script>
  import AddingData from "./components/AddingData.svelte";
  import Assignements from "./components/Assignements.svelte";
  import Date from "./components/Date.svelte";
  import Declerations from "./components/Declerations.svelte";
  import DynamicAttributes from "./components/DynamicAttributes.svelte";
  import HtmlTags from "./components/HTMLTags.svelte";
  import Nested from "./components/Nested.svelte";
  import Statements from "./components/Statements.svelte";
  import Styling from "./components/Styling.svelte";
  import UpdatingArraysAndObjects from "./components/UpdatingArraysAndObjects.svelte";

  const name = "Emilie";

</script>

<h2 id="page-title">First Svelte Project</h2>
<div>More content for{name}</div>
<Date/>
<AddingData/>
<DynamicAttributes/>
<Styling/>
<Nested/>
<HtmlTags/>
<Assignements/>
<Declerations/>
<Statements/>
<UpdatingArraysAndObjects/>

<style>
  #page-title{
    color: blue;
  }

</style>