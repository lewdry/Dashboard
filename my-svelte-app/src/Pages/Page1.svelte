<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>Hello. Welcome to the latest draft EerieBI (Executive Earnings Report & Insights Exchange) report.<br><br>
    Your input is required before the report can be issued to the Leadership Team.
    Please make every effort to complete.<br><br>
    Best Regards,<br>Agho St. Graves,<br>Junior Performance Analyst</p>
    <div class="button-container">
      <button on:click={() => goToPage(0)}>Help</button>
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
      font-size: 2.5vh;
      line-height: 1.5;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  
    /* 
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #2eb28f;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
    }
    */

    button {
      /* Fixed size */
      width: 16vh; 
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