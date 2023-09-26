<script lang="ts">
  let counter = 0;

  function increment() {
    counter++;
  }
</script>

<h1>Counter</h1>
<div>
  {counter}
</div>
<button on:click={increment}>Increment</button>
