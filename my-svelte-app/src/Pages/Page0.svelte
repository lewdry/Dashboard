<script>
    export let goToPage;
  </script>
  
  <div class="page">
    <p>Welcome to EerieBI, a data mystery. This is a puzzle game, set in a haunted dashboard, where you are tasked with solving the mysterious death of a Junior Performance Analyst.</p>
    <div class="button-container">
      <div></div> <!-- Empty div for spacing -->
      <button on:click={() => goToPage(1)}>Start</button>
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