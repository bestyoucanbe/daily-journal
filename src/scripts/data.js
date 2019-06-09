fetch("http://localhost:3000/objectsJournalEntry") //Access the data location and return a promise object containing it
  .then(data => data.json()) //A promise is returned containing the data in the JSON format
  .then(parsedEntries => {  //A promise is always returned (in this case this function is not returning anything to be put into the promise object, however)
      addThisToTheDOM(parsedEntries) 
  });