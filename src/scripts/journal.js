
const objectsJournalEntry = [
  
  {Date_of_Entry:  "06/01/2019",
  Concepts_Covered: "Using Git and Github",
  Journal_Entry:  "Man, who thought of this stuff?  But it sure is cool to collaborate and work together on stuff!",
  Mood_for_the_Day:  "Happy"},
  
  
  {Date_of_Entry:  "06/06/2019",
  Concepts_Covered: "Fat Arrow Functions, Event Listeners, API",
  Journal_Entry:  "It was a long day but a good day!  We covered a lot of ground in a short time.",
  Mood_for_the_Day:  "Happy"},

  {Date_of_Entry:  "06/05/2019",
  Concepts_Covered: "CRUD Method of Managing Data, Postman",
  Journal_Entry:  "Learned how to GET and POST to the JSON-Server!  What fun is around the corner, I wonder!",
  Mood_for_the_Day:  "Happy"}
]

//Note about Daily Journal Entry 2 (after-the-fact!!!)--The expectation was to actually store each Journal entry object into a different variable and push each variable into an array containing all of the entries...that is why it looks like there is not much being accomplished logically by pushing from one array to the next when we went back and looked at what we had done!

// Daily Journal 3 Instructions---Starts Here *******************************************

// Overall Goals of Journal Entry 3---Starts Here ***

// You have built your form for entering in journal entries, so now you need to define how the data that you will be collecting in the form should be stored. Your learning objective for this chapter is to build a function that returns an HTML representation of a journal entry data structure, and render it to the DOM.

// The First Journal Entry Rendered to the DOM
// By the end of this chapter - once you have all the functionality written - you will see your journal entry beneath your form.

// Overall Goals of Journal Entry 3--Ends Here ***

// Defining Journal Entries--Completed!!!!
// Combining the definition of the daily journal objects, and the daily journal collection. Open journal.js and define your journal entry objects by inside the journal entries array.--Completed!!!

// Journal Entries in the DOM
// The last step in this chapter is to take your raw data structures, and create HTML representations of them so they can be added to the DOM.

// Journal Entry Component Function
// You've worked on exercises in which you wrote functions that returned HTML components. Now write a function that builds a journal entry HTML string template.

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

addThisToTheDOM(objectsJournalEntry);

// Daily Journal 3 Instructions---Ends Here *******************************************

