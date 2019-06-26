//Instructions for Daily Journal 6---Starts Here *****************************************

// Overall Goals-->The learning objective for this chapter is to apply your knowledge of event listeners, and querying the DOM to make your daily journal form work and save entries to your API. You will also use fetch to make a POST request to your API, while using a factory function to generate the object that will be saved.

// Listen for Submit Button Click
// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. Guidance on syntax is provided below.

// Collect Form Field Values
// Use document.querySelector to select your input fields.
// Use the .value property on the input field elements to get the text that you typed/chose.
// Basic Input Validation
// Using required attribute to ensure no blank entries
// No characters other than letters, numbers, (), {}, :, and ;
// Journal Entry Factory Function
// Define a factory function whose responsibility is to generate an object that represents a journal entry.

// Using POST Method to Create Resources
// Now you must use fetch to create your journal entry in the API. The default method is GET, so you've never had to specify and configuration options with your fetch statements before. However, with POST, you need to configure the request.

// Here's an example.

// // Invoke the factory function, passing along the form field values
// const newJournalEntry = ??

// // Use `fetch` with the POST method to add your entry to your API
// fetch("url", { // Replace "url" with your API's URL
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newJournalEntry)
// })
// Chained Promises
// Add new method named saveJournalEntry to your data module. It should take the entry object as an argument.
// Implement the method using fetch to perform a POST request.
// In main module, invoke method to save entry, then add item to local array.
// Update DOM with updated array values.
// post.then(get).then(render)

//Instructions for Daily Journal 6---Ends Here *****************************************
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
//The API object defined in the data.js is being called and a method on that object is being executed.  The .then is being daisy-chained to send the promise object containing the JSON data to the addThisToTheDOM function defined in the entriesDOM.js file.
API.getJournalEntries().then(parsedEntries => {
  //A promise is always returned (in this case this function is not returning anything to be put into the promise object, however)
  DOMMethods.addThisToTheDOM(parsedEntries);
});

function triggerListener() {
  document
    .querySelector("#recordEntrybuttonid")
    .addEventListener("click", () => {
      console.log(`Record Entry Button was clicked`);
      let journalDateval = document.querySelector("#journalDate").value;
      let conceptsCoveredval = document.querySelector("#conceptsCovered").value;
      let journalEntryval = document.querySelector("#journalEntry").value;
      let moodfortheDayval = document.querySelector("#moodForDay").value;
      console.log(
        `journalDate`,
        journalDateval,
        `concepts covered`,
        conceptsCoveredval,
        `journalEntry`,
        journalEntryval,
        `moodfortheDayval`,
        moodfortheDayval
      );
      let isitValid = validateInputFields(conceptsCoveredval, journalEntryval);
      console.log(`isitValid`, isitValid);
      isitValid = true;
      if (isitValid) {
        const newJournalEntry = createEntryItem(
          journalDateval,
          conceptsCoveredval,
          journalEntryval,
          moodfortheDayval
        );
        console.log(`newjournalentry`,newJournalEntry);
        API.postJournalEntries(newJournalEntry).then(API.getJournalEntries).then(parsedEntries => {
            DOMMethods.addThisToTheDOM(parsedEntries);
          });
      }
    });
}

triggerListener();
