<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>You pick up the green bottle. The frost doesn't melt away in your hand. Strange. A small brown stopper sticks out of the neck. You aren't sure if you should pull it out, but you feel your hand moving to it before you can stop yourself. You open the bottle. You think of the moon in the sky, phases, cycles. Starting again.</p>
    <div class="button-container">
      <div></div> <!-- Empty div for spacing -->
      <button on:click={() => goToPage(1)}>Drink from bottle</button>
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