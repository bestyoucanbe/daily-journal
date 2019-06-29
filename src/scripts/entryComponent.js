//Wrap a journal entry with html and make an object out of it.
const buildHTML = Object.create({

  buildUpDOMElement: function(singleJournalEntry) {
    let div = document.createElement("div")
    div.innerHTML = `<h1>Concepts Covered:  ${
      singleJournalEntry.Concepts_Covered
    }<h3>Date of Entry:  ${
      singleJournalEntry.Date_of_Entry
    } <h3><p>Journal Entry:  ${
      singleJournalEntry.Journal_Entry
    }<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`
    // Instructions:  Add Delete button to each journal entry card that you display [Complete]
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    // Instructions:  Add event listener to delete button [Complete]
    deleteBtn.addEventListener("click", () => {
          //Instructions:  On click, delete journal entry--Part 1 of 2 [Complete]
          //Instructions:  Get all entries and display again [Complete]
          API.deleteJournalEntry(singleJournalEntry.id).then(API.getJournalEntries).then(parsedEntries => {
            DOMMethods.addThisToTheDOM(parsedEntries);
          });

    })
    div.appendChild(deleteBtn)
    return div;
  }

});