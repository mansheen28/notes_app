import { React, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import CustomModal from "./CustomModal";

export default function Notes(props) {

  const style = {
    backgroundColor: props.bgColor,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const reEditNote = (name, description, date) => {
    var editSavedNotes = JSON.parse(localStorage.getItem("savedNotes"));
    editSavedNotes[props.idx].notesName = name;
    editSavedNotes[props.idx].notesDescription = description;
    editSavedNotes[props.idx].notesDate = date;
    // localStorage.setItem("savedNotes", JSON.stringify(editSavedNotes));
    props.handleListUpdate(editSavedNotes);
    handleCloseModal();
  };



  const [initialValues, setInitialValues] = useState({});

  const editNoteModal = () => {
    const notes = JSON.parse(localStorage.getItem("savedNotes"));
   console.log(notes);
    setInitialValues({
      name: notes[props.idx].notesName,
      description: notes[props.idx].notesDescription,
      date: notes[props.idx].notesDate,
  })
    setIsModalOpen(true);
  };

  const deleteNote = () =>{
    var notes = JSON.parse(localStorage.getItem("savedNotes"));
    notes.splice(props.idx, 1);
    props.handleListUpdate(notes);
  }

  return (
    <div className="notesContainer" style={style}>
      <div className="notesName">{props.notesName}</div>
      <div
        className="notesDescription"
        value={props.notesDescription}
        dangerouslySetInnerHTML={{ __html: props.notesDescription }}
      ></div>
      <div className="notefooter">
        <div className="notesDate">{props.notesDate}</div>
        <div className="editAndDelte">
          <div className="editNote" onClick={editNoteModal}>
            <MdEdit className="editIcon" />
          </div>
          {isModalOpen && ( 
            <CustomModal
              open={isModalOpen}
              onClose={handleCloseModal}
              onSave={reEditNote}
              initialValues={initialValues}
            />
          )}
          <div className="deleteNote" onClick={deleteNote}>
            <MdDeleteForever className="deleteIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
