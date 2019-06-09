//Instructions for Daily Journal 4---Starts Here *****************************************
// -----------------------------------------
// Daily Journal 4--Overall Goals
// Your learning objective in this chapter is to set up JSON Server to store the data for your daily journal entries, query that data from the API, and then use your knowledge of Promises (remember, fetch is a fancy Promise) and then() to render the entries to the DOM.

// [You are going to expose your journal entries via an API, request that API over HTTP, and then populate your DOM when the data comes back in a response.]
// ------------------------------------------
// Install json-server by typing in the following command in your terminal-- npm install -g json-server [Completed]

// Create a new directory in your project named api, and create a new file in that directory named entries.json. [Completed]

// Your next step is to remove the array of entries that you have in journal.js, and transplant it to api/entries.json as a JSON object. [Completed]

// When working with Official JSON Objects, all keys should be strings so put double quotes around them. [Completed]

// Now you run the json-server command with the arguments below in the api directory: [Completed]

// cd api
// json-server -w entries.json

// Go to your browser now, and visit the URL listed in the output. It should be http://localhost:3000. Then click on the hyperlink for entries and you should see the objects that you created. [Completed]

// --------------------------

//**** Moved to entryComponent.js 
// function buildHTMLstringtemplate (singleJournalEntry) {
//   const stringTemplateforOneItem = `<h1>Concepts Covered:  ${singleJournalEntry.Concepts_Covered}<h3>Date of Entry:  ${singleJournalEntry.Date_of_Entry} <h3><p>Journal Entry:  ${singleJournalEntry.Journal_Entry}<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`;
//   return stringTemplateforOneItem;
//**** Moved to entryComponent.js

// Render Journal Entries to the DOM
// Create a new element in your index.html file that will be the container for all of your journal entries. Place it beneath the form component.

// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

//**** Moved to entriesDOM.js start
// function addThisToTheDOM (entireObject) {
  
//   let forHoldingHTMLstringtemplate = ""; //Initialize a variable for holding the HTML string
//   for (let i = 0; i < entireObject.length; i++) {
    
//     forHoldingHTMLstringtemplate += buildHTMLstringtemplate(entireObject[i]);//Pass each journal entry into the function that creates the template and have it add to the previous value
    
//   }
//   let putitHere = document.querySelector('#output'); //Find the location for sending your HTML that was generated
//   putitHere.innerHTML = forHoldingHTMLstringtemplate;  //Change the innerHTML property of the item to contain the newly generated stringtemplate that contains all the journal entries
  
// }
//**** Moved to entriesDOM.js end

// Using fetch() to Query Data

// Refactor: At this point, the journalEntries array should be completely removed from your JavaScript. You are now going to get the data from your API server. [Completed]

// Since you are now simulating the scenario that your data now lives somewhere else on the Web you need to use the fetch() command in JavaScript. [Completed]

// fetch() // Fetch from the API
//     .then()  // Parse as JSON
//     .then(entries => {
//         // What should happen when we finally have the array?
//     })
// **** Moved to data.js start
// fetch("http://localhost:3000/objectsJournalEntry")
//   .then(data => data.json())
//   .then(parsedEntries => {
//       addThisToTheDOM(parsedEntries) //Refactored the code be called from within the fetch statement
//   });
// **** Moved to data.js end

// -----------------------------
// Viewing the Response [Completed]

// Once you have your fetch written correctly, refresh your browser and go to the Network tab in your dev tools. You will see an entry labeled fetch. If you click on that request, you can preview the response.

// ----------------------------

//Instructions for Daily Journal 4---Ends Here *****************************************
//Instructions for Daily Journal 5---Starts Here ***************************************

// In this stage of the application, you are going to modularize your JavaScript code. You will create several JavaScript files, which each have a single responsibility. ****IMPORTANT:  Then you will need to include them in your index.html in the correct order.****

// By modularizing your code, you achieve two main goals:

// 1.  When changes need to be made to your application, it makes it far easier to find the code that needs to change. This benefit comes at the expense of having more files to manage, and open, during development.

// 2.  It nearly eliminates the possibility of merge conflicts. When working in a team, each developer takes responsbility for making a very specific change. By modularizing your code, the likelihood that two developers will need to be working on the same file, at the same time, is minimized.

// Single Responsbility Modules

// Create three new files in your src/scripts directory.

// data.js - Move the code that deals with getting the data into this file. [Completed]
// entriesDOM.js - Move the code that is responsible for modifying the DOM into this file. [Completed]
// entryComponent.js - Move the code that is responsible for creating the journal entry HTML component into this file. [Completed]
// Tip: Once this is done, your journal.js file should be completely empty. [Yes!]

// Now refactor your src/index.html file to include all four JavaScript files.
// [Completed!  And checked to make sure that it is working as planned!]
// Refactor
// Replace the code in src/scripts/data.js with the code below. Since you moved the code to this file, you should consider this file an independent, helper module now. It should not directly execute any logic for the application. The responsbility for how the application should operate should reside in src/scripts/journal.js now.

// The code in the data.js module, then, should only define functionality for how to access the data, but should not immediately run it.

// API Access Module
// const API = {
//     getJournalEntries () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// }
// You may have noticed some strange syntax in the object above. It's ok if you didn't. Take a closer look and you will see that the getJournalEntries method on the object was defined with the traditioanltraditional key: value syntax. Here's the same object using that syntax.

// const API = {
//     getJournalEntries: function () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// }
// Both are valid, but the first example saves a few characters. [Completed!]

// Main Application Logic
// Now that you've defined an object whose responsibility is to access the data, you need to write code in src/scripts/journal.js to use that object and get the data. Once you know you have the data, pass it along to the renderJournalEntries function that now lives in src/scripts/entriesDom.js.

// Put this comment in src/scripts/journal.js. Then write the main logic that uses the code in the helper modules.

// /*
//     Main application logic that uses the functions and objects
//     defined in the other JavaScript files.

//     Change the fake variable names below to what they should be
//     to get the data and display it.
// */
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

//The API object defined in the data.js is being called and a method on that object is being executed.  The .then is being daisy-chained to send the promise object containing the JSON data to the addThisToTheDOM function defined in the entriesDOM.js file.

API.getJournalEntries().then(parsedEntries => {  //A promise is always returned (in this case this function is not returning anything to be put into the promise object, however)
        addThisToTheDOM(parsedEntries) 
    });

// Challenge
// Change the code in both src/scripts/entriesDOM.js and src/scripts/entryComponent.js so that the functions in each one becomes a method on an object, just like the code for API does above. Use Object.create.

// When you are done, there should be three objects defined in your application.

// One object that has a method for API access
// One object that has a method for building a component
// One object that has a method rendering the components to the DOM
// Refactor: Once the objects are defined, refactor your code to use the methods on those objects where needed.
//Instructions for Daily Journal 5---Ends Here ***************************************
