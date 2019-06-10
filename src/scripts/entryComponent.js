const buildHTML = Object.create({
  buildHTMLstringtemplate: function(singleJournalEntry) {
    const stringTemplateforOneItem = `<h1>Concepts Covered:  ${
      singleJournalEntry.Concepts_Covered
    }<h3>Date of Entry:  ${
      singleJournalEntry.Date_of_Entry
    } <h3><p>Journal Entry:  ${
      singleJournalEntry.Journal_Entry
    }<p><h3>Mood for the Day:  ${singleJournalEntry.Mood_for_the_Day}</h3>`;
    return stringTemplateforOneItem;
  }
});
