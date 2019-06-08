
// Data used upto Journal 3--Now transferred to api/entries.json file

// const objectsJournalEntry = [
  
//   {Date_of_Entry:  "06/01/2019",
//   Concepts_Covered: "Using Git and Github",
//   Journal_Entry:  "Man, who thought of this stuff?  But it sure is cool to collaborate and work together on stuff!",
//   Mood_for_the_Day:  "Happy"},
  
  
//   {Date_of_Entry:  "06/06/2019",
//   Concepts_Covered: "Fat Arrow Functions, Event Listeners, API",
//   Journal_Entry:  "It was a long day but a good day!  We covered a lot of ground in a short time.",
//   Mood_for_the_Day:  "Happy"},

//   {Date_of_Entry:  "06/05/2019",
//   Concepts_Covered: "CRUD Method of Managing Data, Postman",
//   Journal_Entry:  "Learned how to GET and POST to the JSON-Server!  What fun is around the corner, I wonder!",
//   Mood_for_the_Day:  "Happy"}
// ]

//Instructions for Daily Journal 4---Starts Here *****************************************
// -----------------------------------------
// Daily Journal 4--Overall Goals
// Your learning objective in this chapter is to set up JSON Server to store the data for your daily journal entries, query that data from the API, and then use your knowledge of Promises (remember, fetch is a fancy Promise) and then() to render the entries to the DOM.

// [You are going to expose your journal entries via an API, request that API over HTTP, and then populate your DOM when the data comes back in a response.]
// ------------------------------------------
// Install json-server by typing in the following command in your terminal-- npm install -g json-server 

// Create a new directory in your project named api, and create a new file in that directory named entries.json.

// Your next step is to remove the array of entries that you have in journal.js, and transplant it to api/entries.json as a JSON object.

// When working with Official JSON Objects, all keys should be strings so put double quotes around them.

// Now you run the json-server command with the arguments below in the api directory:

// cd api
// json-server -w entries.json

// Go to your browser now, and visit the URL listed in the output. It should be http://localhost:3000. Then click on the hyperlink for entries and you should see the objects that you created.

// --------------------------

function buildHTMLstringtemplate (singleJournalEntry) {
  const stringTemplateforOneItem = `<h1>Concepts Covered:  ${singleJournalEntry.Concepts_Covered}<h3>Date of Entry:  ${singleJournalEntry.Date_of_Entry} <h3><p>Journal Entry:  ${singleJournalEntry.Journal_Entry}<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`;
  return stringTemplateforOneItem;
}

// Render Journal Entries to the DOM
// Create a new element in your index.html file that will be the container for all of your journal entries. Place it beneath the form component.

// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

function addThisToTheDOM (entireObject) {
  
  let forHoldingHTMLstringtemplate = ""; //Initialize a variable for holding the HTML string
  for (let i = 0; i < entireObject.length; i++) {
    
    forHoldingHTMLstringtemplate += buildHTMLstringtemplate(entireObject[i]);//Pass each journal entry into the function that creates the template and have it add to the previous value
    
  }
  let putitHere = document.querySelector('#output'); //Find the location for sending your HTML that was generated
  putitHere.innerHTML = forHoldingHTMLstringtemplate;  //Change the innerHTML property of the item to contain the newly generated stringtemplate that contains all the journal entries
  
}

// Using fetch() to Query Data

// Refactor: At this point, the journalEntries array should be completely removed from your JavaScript. You are now going to get the data from your API server.

// Since you are now simulating the scenario that your data now lives somewhere else on the Web you need to use the fetch() command in JavaScript.

// fetch() // Fetch from the API
//     .then()  // Parse as JSON
//     .then(entries => {
//         // What should happen when we finally have the array?
//     })

fetch("http://localhost:3000/objectsJournalEntry")
  .then(data => data.json())
  .then(parsedEntries => {
      addThisToTheDOM(parsedEntries) //Refactored the code be called from within the fetch statement
  });

// -----------------------------
// Viewing the Response

// Once you have your fetch written correctly, refresh your browser and go to the Network tab in your dev tools. You will see an entry labeled fetch. If you click on that request, you can preview the response.

// ----------------------------

//Instructions for Daily Journal 4---Ends Here *****************************************
