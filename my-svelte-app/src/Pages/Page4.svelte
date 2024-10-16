<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>Great work! Now, there's something even more strange I need you to check.<br><br>Chart: Number of mysterious deaths.<br><br>Can you help?</p>
    <div class="button-container">
      <button on:click={() => goToPage(3)}>Ehh, no thanks</button>
      <button on:click={() => goToPage(5)}>Of course</button>
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