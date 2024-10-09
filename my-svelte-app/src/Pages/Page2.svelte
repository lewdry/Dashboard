<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>You've entered the tunnel and find yourself at a fork. There are two tunnels ahead of you: one to the left and one to the right. Which path will you choose?</p>
    <div class="button-container">
      <button on:click={() => goToPage(3)}>Take left tunnel</button>
      <button on:click={() => goToPage(4)}>Take right tunnel</button>
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