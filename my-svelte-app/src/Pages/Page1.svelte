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
      font-size: 1.2em;
      line-height: 1.2;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1em;
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
      padding: 0em;
      box-sizing: border-box;
    }

    button:hover {
      background-color: #2eb28f;
    }
  </style>