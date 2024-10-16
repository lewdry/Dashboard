<script>
  export let goToPage;
  let isHidden = false;
 
  function toggleHiddenMessage() {
    isHidden = !isHidden;
  }
 </script>
 
 <div class="page">
   <button class="page-content" on:click={toggleHiddenMessage} class:hidden={isHidden} aria-label="Toggle hidden message">
     <p>
       <span class="remain">Hel</span><span class="hide">lo. Welcome to the latest draft of the Executive Earnings Re</span><span class="remain">p</span><span class="hide">ort & Insights Exchange.</span>
       <br><br>
       <span class="remain">M</span><span class="hide">ay I requ</span><span class="remain">e</span><span class="hide">st your input and approval pr</span><span class="remain">i</span><span class="hide">or to for</span><span class="remain">ma</span><span class="hide">l issue.</span>
       <br><br>
       <span class="hide">Best Regards,</span><br><span class="hide">A</span><span class="remain">gho St. </span><span class="hide">Graves,</span><br><span class="hide">Junior </span><span class="hide">Performance Analyst</span>
     </p>
   </button>
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
   .page-content {
     flex-grow: 1;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     background: none;
     border: none;
     cursor: pointer;
     padding: 0;
     margin: 0;
     width: 100%;
     text-align: center;
   }
   p {
     font-size: 1.2em;
     line-height: 1.2;
     margin: 0;
     max-width: 600px;
   }
   .button-container {
     display: flex;
     justify-content: space-between;
     margin-top: 1em;
     width: 100%;
   }
   .button-container button {
     width: 6.5em;
     height: 2.5em;
     font-size: 1.2em;
     line-height: 1;
     text-align: center;
     font-weight: 600;
     overflow: hidden;
     background-color: #2eb28f;
     color: white;
     border: none;
     border-radius: 0.5em;
     cursor: pointer;
     padding: 0;
     box-sizing: border-box;
   }
   .button-container button:hover {
     background-color: #2eb28f;
   }
   .hide {
     transition: color 0.5s ease;
   }
   .page-content.hidden .hide {
     color: white;
   }
   .page-content:focus {
     outline: 2px solid #2eb28f;
   }
 </style>