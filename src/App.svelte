<script lang="ts">
  let age_input: number;
  function reset_age() {
    age_input = 21;
  }
  reset_age();
  $: age = age_input | 0;

  const SHAZ_AGE = 20;
  $: is_shaz = age < SHAZ_AGE;

  let dialog: HTMLDialogElement;
  $: if (is_shaz) {
    dialog.showModal();
  }
</script>

<main class="center">
  <label class="center">
    הכנס את גילך
    <input type="number" bind:value={age_input} min={0} />
  </label>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <dialog
    bind:this={dialog}
    on:close={reset_age}
    on:click|self={() => dialog.close()}
  >
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="./images/shaz2.jpg" />
  </dialog>
</main>

<style>
  img {
    max-width: calc(100% - 50px);
  }
  dialog {
    margin: min(auto, 1rem);
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: inherit;
  }

  /* Firefox */
  input[type="number"] {
    appearance: none;
    -moz-appearance: textfield;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 1.5rem;
    gap: 1rem;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
