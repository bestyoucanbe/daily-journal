//Wrap a journal entry with html and make an object out of it.
const buildHTML = Object.create({

  buildUpDOMElement: function(singleJournalEntry) {

    let outerdiv = document.createElement("div")
    let innerdiv = document.createElement("div")
    outerdiv.innerHTML = `<h1>Concepts Covered:  ${
      singleJournalEntry.Concepts_Covered
    }<h3>Date of Entry:  ${
      singleJournalEntry.Date_of_Entry
    } <h3><p>Journal Entry:  ${
      singleJournalEntry.Journal_Entry
    }<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`
    innerdiv.setAttribute("id", `editFormContainer-${singleJournalEntry.id}`)
    outerdiv.appendChild(innerdiv);
    let deleteBtn = document.createElement("button")
    let editBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    editBtn.textContent = "edit"
    deleteBtn.addEventListener("click", () => {

          API.deleteJournalEntry(singleJournalEntry.id).then(API.getJournalEntries).then(parsedEntries => {
            DOMMethods.addThisToTheDOM(parsedEntries);
          });

    })
    editBtn.addEventListener("click", () => {

      console.log("Edit clicked")
      let editFormforThisEntry = createEditForm(singleJournalEntry)
      let innerDivId = innerdiv.id;
      setupEditFormandFunctionality(innerDivId, editFormforThisEntry)

    })
    outerdiv.appendChild(deleteBtn)
    outerdiv.appendChild(editBtn)
    return outerdiv;
  }

});

//Create the edit form component
function createEditForm(oneJournalEntry) {
  let editFormTemplate = `<fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate1" id="journalDate1" value =${oneJournalEntry.Date_of_Entry} required>
        </fieldset>
        <input type="hidden" id="journal-id1" value=${oneJournalEntry.id}>
        <fieldset>
            <label for="conceptsCovered">Concepts Covered</label>
            <input type="text" name="conceptsCovered1" id="conceptsCovered1" value=${oneJournalEntry.Concepts_Covered}required>
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry1" id="journalEntry1" value=${oneJournalEntry.Journal_Entry} required></textarea>
        </fieldset>
        <fieldset>
            <label for="moodForDay">Mood For the Day</label>
            <select id="moodForDay1" required>
                <option value="excited" ${oneJournalEntry.Mood_for_the_Day === "excited" ? "selected": ""}>Excited</option>
                <option value="happy" ${oneJournalEntry.Mood_for_the_Day === "happy" ? "selected": ""}>Happy</option>
                <option value="stressed" ${oneJournalEntry.Mood_for_the_Day === "stressed" ? "selected": ""}>Stressed</option>
                <option value="overwhelmed" ${oneJournalEntry.Mood_for_the_Day === "overwhelmed" ? "selected": ""}>Overwhelmed</option>
            </select>
        </fieldset>
        <button id="journal-save-btn">save journal entry</button>`
return editFormTemplate
}

function setupEditFormandFunctionality(editContainerId, editForm) {
  document.querySelector(`#${editContainerId}`).innerHTML = editForm //Place the edit form into the edit location for that id
  document.querySelector("#journal-save-btn").addEventListener("click", () => {
    let journalDate = document.querySelector("#journalDate1").value
    let journalId = document.querySelector("#journal-id1").value
    let journalConcepts = document.querySelector("#conceptsCovered1").value
    let journalEntry = document.querySelector("#journalEntry1").value
    let journalMood = document.querySelector("#moodForDay1").value
    let updatedJournal = createEntryItem( journalDate, journalConcepts, journalEntry, journalMood )
    updatedJournal.id = journalId
    API.updateJournalEntry(updatedJournal).then(API.getJournalEntries).then(parsedEntries => {
      DOMMethods.addThisToTheDOM(parsedEntries);
    });
  })
}
// *******************************************************************************

// import {deleteLego, updateLego } from "./api.js"
// import { getAndDisplayLegos } from "./helpers.js"
// import { buildLegoObj } from "./event.js"

// let legoList = document.querySelector("#lego-list")

// // Add Lego data to the DOM
// function listLegos(legoArr) {
//   legoArr.forEach( lego => {
//     legoList.appendChild(createLegoComponent(lego))
//   })
// }

// function createLegoComponent(lego) {
//   let el = document.createElement("div")
//   let li = document.createElement("li")
//   let div = document.createElement("div")
//   let deleteBtn = document.createElement("button")
//   let editBtn = document.createElement("button")
//   li.innerHTML = `${lego.creator} made a ${lego.color} thingy with legos!`
//   // Add the li to the new div
//   el.appendChild(li)
//   // give the deleteBtn an id based on the id of the lego, give it some text, and setup the event listener
//   div.setAttribute("id", `editFormContainer-${lego.id}`)
//   el.appendChild(div)
//   editBtn.textContent = "edit"
//   deleteBtn.textContent = "delete"
//   deleteBtn.addEventListener("click", () => {
//     // call the delete function
//     console.log("Is this the lego to delete?", lego.id)
//     deleteLego(lego.id)
//     .then( data => {
//       console.log(data)
//       getAndDisplayLegos()
//     })
//   })
//   editBtn.addEventListener("click", () => {
//     console.log("Edit clicked")
//     let editForm = createEditForm(lego)
//     addEditFormToDOM(div.id, editForm)

//   })
//   // Send the newly created element back to the function that puts the element into the DOM
//   el.appendChild(deleteBtn)
//   el.appendChild(editBtn)
//   return el
// }

// function createEditForm(lego) {
//   return `
//     <input id="lego-edit" name="lego__editor" type="text" value=${lego.creator} >
//     <input type="hidden" id="lego-id" value=${lego.id}>
//     <select type="text" id="lego-color-edit">
//       <option value="red" ${lego.color === "red" ? "selected" : ""}>red</option>
//       <option value="green" ${lego.color === "green" ? "selected" : ""}>green</option>
//       <option value="black" ${lego.color === "black" ? "selected" : ""}>black</option>
//       <option value="orange" ${lego.color === "orange" ? "selected" : ""}>orange</option>
//     </select>
//     <button id="lego-edit-btn">save lego</button>
//   `
// }

// // Add the form to the DOM
// function addEditFormToDOM(editContainer, editForm) {
//   document.querySelector(`#${editContainer}`).innerHTML = editForm
//   document.querySelector("#lego-edit-btn").addEventListener("click", () => {
//     let name = document.querySelector("#lego-edit").value
//     let color = document.querySelector("#lego-color-edit").value
//     let legoId = document.querySelector("#lego-id").value
//     let updatedLego = buildLegoObj(name, color)
//     updatedLego.id = legoId
//     console.log(updatedLego)
//     updateLego(updatedLego)
//     .then( () => {
//       getAndDisplayLegos()
//     })
//   })
// }


// export {listLegos}
