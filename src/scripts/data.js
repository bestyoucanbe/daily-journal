// The API object containing the fetch calls to get/post/delete/update data in the database

const API = {
    getJournalEntries: function () {
        return fetch(`http://localhost:3000/objectsJournalEntry`)  //Access the data location and return a promise object containing it
            .then(data => data.json()) //A promise object is being converted from JSON back to regular Javascript
    },
    postJournalEntries: function (theNewEntry) {
        return fetch(`http://localhost:3000/objectsJournalEntry`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(theNewEntry) //Being converted to JSON format from Javascript
        })
    },
    //Instructions:  On click, delete journal entry--Part 2 of 2 [Complete]
    deleteJournalEntry: function (id) {
        return fetch(`http://localhost:3000/objectsJournalEntry/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
    },
    updateJournalEntry:  function (theUpdatedEntry) {
        return fetch(`http://localhost:3000/objectsJournalEntry/${theUpdatedEntry.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(theUpdatedEntry) //Being converted to JSON format from Javascript
        })
    }
}