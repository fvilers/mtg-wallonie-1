<script lang="ts">
  import Counter from "$lib/components/Counter.svelte";

  let counter = 0;
  $: doubled = counter * 2;

  function increment() {
    counter++;
  }
</script>

<svelte:head>
  <title>Counter | Svelte app</title>
</svelte:head>

<h1>Counter</h1>
<Counter value={counter} />
<Counter value={doubled} />
<button on:click={increment}>Increment</button>

<style>
  h1 {
    color: orangered;
  }
</style>
