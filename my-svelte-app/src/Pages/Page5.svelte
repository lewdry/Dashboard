<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>You pick up the green bottle. The frost doesn't melt away in your hand. Strange.<br><br>A small brown stopper sticks out of the neck. You aren't sure if you should pull it out, but you feel your hand moving to it before you can stop yourself. You open the bottle. You think of the moon in the sky, phases, cycles. Starting again.</p>
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
      font-size: 1.2em;
      line-height: 1.2;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  
    button {
      /* Fixed size */
      width: 6.5em; 
      height: 2.5em; 
      
      /* Text properties */
      font-size: 1.2em;
      line-height: 1;
      text-align: center;
      font-weight: 600;
      
      /* Prevent text overflow */
      overflow: hidden;
      
      /* Other styles */
      background-color: #2eb28f;
      color: white;
      border: none;
      border-radius: 0.5em;
      cursor: pointer;
      
      /* Padding */
      padding: 0.2em;
      box-sizing: border-box;
    }
  
    button:hover {
      background-color: #2eb28f;
    }
  </style>