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
      font-size: 2.5vh;
      line-height: 1.5;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  
    button {
      /* Fixed size */
      width: 18vh; 
      height: 6vh; 
      
      /* Flexible text container */
      display: flex;
      justify-content: center;
      align-items: center;
      
      /* Text properties */
      font-size: 2vh;
      line-height: 1.2;
      text-align: center;
      font-weight: 600;
      
      /* Prevent text overflow */
      overflow: hidden;
      
      /* Other styles */
      background-color: #2eb28f;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      
      /* Optional: add padding inside the fixed size */
      padding: 0.5rem;
      box-sizing: border-box;
    }
  
    button:hover {
      background-color: #2eb28f;
    }
  </style>