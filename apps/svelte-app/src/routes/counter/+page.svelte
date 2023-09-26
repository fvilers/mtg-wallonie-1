<script lang="ts">
  import Counter from "$lib/components/Counter.svelte";

  let counter = 0;
  $: doubled = counter * 2;

  function increment() {
    counter++;
  }
</script>

<h1>Counter</h1>
<Counter value={counter} />
<Counter value={doubled} />
<button on:click={increment}>Increment</button>
