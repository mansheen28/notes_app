import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import CustomModal from "./components/CustomModal"; // Make sure to import the CustomModal component
import Button from '@mui/material/Button';

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("savedNotes")) || [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (name,description,date) => {
    const newNote = {
      notesName: name,
      notesDescription: description,
      notesDate: date,
      bgColor: "lightblue",
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    handleCloseModal()
  };

  const handleOpenModal = () => {
    
    setIsModalOpen(true);
    initialValues = {"name":"", "description":"", "date":""}
  };

  const handleCloseModal = () => {
  
    setIsModalOpen(false);
    initialValues = {"name":"", "description":"", "date":""}
  };

  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter((note) =>
    note.notesName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  var initialValues = {"name":"", "description":"", "date":""}

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    position: 'absolute',
    top: 'calc(2cm + 10px)',
    right: '0',
    marginRight: '20px',
  };

  const handleListUpdate = (updatedList) =>{
    setNotes(updatedList);
    }

  return (
    <>
      <Navbar onSearchChange={setSearchTerm} />
      <div className="body">
        <Button onClick={handleOpenModal} style={buttonStyle}>
          ADD NOTE
        </Button>
        {isModalOpen && <CustomModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onSave={addNote}
          initialValues={initialValues}
        />}
        {filteredNotes.map((note, index) => (
          <Notes
          key={index}
            idx={index}
            notesName={note.notesName}
            notesDescription={note.notesDescription}
            notesDate={note.notesDate}
            bgColor={note.bgColor}
            handleListUpdate={handleListUpdate}
          />
        ))}
      </div>
    </>  
  );
}

export default App;
