<script lang="ts">
  import { change_font } from "./lib/transitions";
  let age = 21;
  $: visible = age < 20;
</script>

<main class="center">
  <label class="center">
    הכנס את גילך
    <input type="range" bind:value={age} />
  </label>

  <p>{age}</p>
  <div class="center">
    {#if visible}
      <card transition:change_font={{ duration: 300 }}>שצ</card>
    {/if}
  </div>
</main>

<style>
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 1.5rem;
    gap: 1rem;
  }
</style>
