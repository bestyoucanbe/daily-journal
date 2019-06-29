//Put journal entries into the DOM.

const DOMMethods = Object.create(

  {
    addThisToTheDOM: function(entireObject) {
      let putitHere = document.querySelector("#output"); //Location for placing the HTML that was generated
      for (let i = 0; i < entireObject.length; i++) {
        putitHere.appendChild(buildHTML.buildUpDOMElement(
          entireObject[i])); //Pass each journal entry into the function that creates the template and have it add to the previous value
      }
    }
  }
);