import { useEffect, useState } from "react";
import NotesList from "./component/NotesList";
import { nanoid } from "nanoid";
import Search from "./component/Search";
import Navbar from "./component/Navbar";

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
const savedNotes=JSON.parse(
  localStorage.getItem('react-notes-app-data')
  );
  if(savedNotes){
    setNotes(savedNotes)
  }

  },[]);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Navbar handleToggleDarkmode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
