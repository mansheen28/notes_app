import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import OpenModal from "./components/OpenModal";

function App() {
  const [notes, setNotes] = useState(() => {
    // Initialize the state with data from local storage or an empty array
    const storedNotes = JSON.parse(localStorage.getItem("savedNotes")) || [];
    return storedNotes;
  });

  const addNote = (name, description, date) => {
    const newNote = {
      notesName: name,
      notesDescription: description,
      notesDate: date,
      bgColor: "lightblue", // You can set the background color as needed
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Update local storage whenever notes change
  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Navbar />
      <div className="body">
        <OpenModal addNote={addNote} />
        {notes.map((note, index) => (
          <Notes
            key={index}
            notesName={note.notesName}
            notesDescription={note.notesDescription}
            notesDate={note.notesDate}
            bgColor={note.bgColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
