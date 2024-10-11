<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>You find yourself in a strange room. The walls are glowing faintly and the temperature here is noticeably cooler. In the centre of the room is a small green glass bottle, covered in frost. The tunnel continues on the other side of the room.</p>
    <div class="button-container">
      <button on:click={() => goToPage(2)}>Follow tunnel</button>
      <button on:click={() => goToPage(5)}>Investigate bottle</button>
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
      line-height: 1.5;
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
      font-size: 1.4em;
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