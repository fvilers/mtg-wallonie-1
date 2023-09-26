<script lang="ts">
  import Counter from "$lib/components/Counter.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: counter = data.counter;
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
