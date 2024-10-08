<script>
  import { onMount } from 'svelte';
  import Page1 from './Pages/Page1.svelte';
  import Page2 from './Pages/Page2.svelte';
  import Page3 from './Pages/Page3.svelte';
  import Page4 from './Pages/Page4.svelte';
  import Page5 from './Pages/Page5.svelte';

  let currentPage = 1;

  function goToPage(pageNumber) {
    currentPage = pageNumber;
  }

  onMount(() => {
    // Any initialization code can go here
  });
</script>

<main>
  <div class="game-window">
    <h1 class="header">Dashboard: a data mystery.</h1>
    <div class="content">
      {#if currentPage === 1}
        <Page1 {goToPage} />
      {:else if currentPage === 2}
        <Page2 {goToPage} />
      {:else if currentPage === 3}
        <Page3 {goToPage} />
      {:else if currentPage === 4}
        <Page4 {goToPage} />
      {:else if currentPage === 5}
        <Page5 {goToPage} />
      {/if}
    </div>
  </div>
</main>

<style>
  :global(body, html) {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
  }

  .game-window {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 700px;
    aspect-ratio: 4 / 7;
    border: 0.1rem solid black;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @media (orientation: landscape) {
    .game-window {
      height: 90vh;
      width: auto;
    }
  }

  @media (orientation: portrait) {
    .game-window {
      width: 90vw;
      height: auto;
    }
  }

  .header {
    background-color: #2eb28f;
    color: white;
    padding: 1rem;
    margin: 0;
    text-align: center;
  }

  .content {
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>