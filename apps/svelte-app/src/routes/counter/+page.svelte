<script lang="ts">
  let counter = 0;
  $: doubled = counter * 2;

  function increment() {
    counter++;
  }
</script>

<h1>Counter</h1>
<div>Counter: {counter}</div>
<div>Doubled: {doubled}</div>
<button on:click={increment}>Increment</button>
