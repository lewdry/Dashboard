<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>You find yourself at the entrance of a mysterious cave. The air is cool and damp, and you can hear strange echoes coming from deep within the tunnel mouth.</p>
    <div class="button-container">
      <div></div> <!-- Empty div for spacing -->
      <button on:click={() => goToPage(2)}>Begin</button>
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
      font-size: 1rem;
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