function addThisToTheDOM (entireObject) {
  
  let forHoldingHTMLstringtemplate = ""; //Initialize a variable for holding the HTML string
  for (let i = 0; i < entireObject.length; i++) {
    
    forHoldingHTMLstringtemplate += buildHTMLstringtemplate(entireObject[i]);//Pass each journal entry into the function that creates the template and have it add to the previous value
    
  }
  let putitHere = document.querySelector('#output'); //Find the location for sending your HTML that was generated
  putitHere.innerHTML = forHoldingHTMLstringtemplate;  //Change the innerHTML property of the item to contain the newly generated stringtemplate that contains all the journal entries
  
}