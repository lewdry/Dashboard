<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>You continue down a narrow stone tunnel. The air is thick and acrid. You feel the space begin to narrow but you continue regardless untile the walls begin to touch your shoulders. The roof of the tunnel drops down sharply. You'll need to crawl from here.</p>
    <div class="button-container">
      <button on:click={() => goToPage(2)}>Turn around</button>
      <button on:click={() => goToPage(4)}>Crawl</button>
    </div>
  </div>

  <style>
    .page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  
    p {
      font-size: 2.5vh;
      line-height: 1.5;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #2eb28f;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #2eb28f;
    }
  </style>