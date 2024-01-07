import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function Notes(props) {
  const style = {
    backgroundColor: props.bgColor,
  };

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
          <div className="editNote">
            <MdEdit className="editIcon" />
          </div>
          <div className="deleteNote">
            <MdDeleteForever className="deleteIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
