//Instructions for Daily Journal 9---Starts Here *****************************************

// Editing Entries
// Add edit button to journal entry [Completed]
// Add hidden input field to form to store id value of edited entry [Completed]
// Add event listener to button. Give unique id which includes id property of entry [Completed]
// When clicked, get the individual entry and populate the form fields with text content. [Completed]
// When user clicks the save button, determine if editing or creating (does hidden input field have a value?) [Completed-separate form]
// If editing, perform a PUT request to the API [Completed]
// Get all entries and display again [Completed]

//Instructions for Daily Journal 9---Ends Here *****************************************

//This is the CONTROL ROOM for the journal entry App!! We call the other pieces from here ...

function createEntryItem( journalDateval, conceptsCoveredval, journalEntryval, moodfortheDayval) {
  const entryItem = {
            "Date_of_Entry":  journalDateval,
            "Concepts_Covered": conceptsCoveredval,
            "Journal_Entry":  journalEntryval,
            "Mood_for_the_Day":  moodfortheDayval
          };
  return entryItem;
}

function validateInputFields(conceptsCoveredval, journalEntryval) {
// TODO: Need to refactor this section to figure out if it is choosing the characters I want for validation.
//   let theseValidCharacters = /^[a-zA-Z|:|,|{}|()]+$/;
//   if (
//     conceptsCoveredval.match(theseValidCharacters) &&
//     journalEntryval.match(theseValidCharacters)
//   ) {
//     return true;
//   } else {
//     //Clear the fields and ask them to reinput the data.
//     document.querySelector("#conceptsCovered").value = "";
//     document.querySelector("#journalEntry").value = "";
//     alert(
//       "Please enter valid characters in the fields.  Do not leave it empty."
//     );
//     return false;
//   }
}

//Display existing journal entries to the DOM
API.getJournalEntries().then(parsedEntries => {
  DOMMethods.addThisToTheDOM(parsedEntries);
});

// Function to create an eventlistener on the Record Journal entry button
function triggerListener() {
  document
    .querySelector("#recordEntrybuttonid")
    .addEventListener("click", () => {
      let journalDateval = document.querySelector("#journalDate").value;
      let conceptsCoveredval = document.querySelector("#conceptsCovered").value;
      let journalEntryval = document.querySelector("#journalEntry").value;
      let moodfortheDayval = document.querySelector("#moodForDay").value;
      let isitValid = validateInputFields(conceptsCoveredval, journalEntryval);
      isitValid = true; //TODO: Reset this flag after entry validation is completed
      if (isitValid) {
        const newJournalEntry = createEntryItem(
          journalDateval,
          conceptsCoveredval,
          journalEntryval,
          moodfortheDayval
        );
        //After posting the last journal entry, get the latest version of the database and display the values
        API.postJournalEntries(newJournalEntry).then(API.getJournalEntries).then(parsedEntries => {
            DOMMethods.addThisToTheDOM(parsedEntries);
          });
      }
    });
}

triggerListener();