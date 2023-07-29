import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveChange = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    } else {
      alert("String cannot be empty");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-Footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveChange}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
