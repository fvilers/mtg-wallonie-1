<script lang="ts">
  import { fade } from "svelte/transition";

  export let value: number;
</script>

{#key value}
  <div in:fade={{ duration: 400 }}>
    {value}
  </div>
{/key}
