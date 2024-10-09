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
      /* Fixed size */
      width: 22vw; 
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