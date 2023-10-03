import INote from '../interfaces/note.interfaces'
import {FC,FocusEvent} from "react"
import React from 'react'
import './Note/Note.css'
type Props={
  note:INote;
  onNoteUpdate: (note:INote)=>void;


}

const Note:FC<Props> = ({note,onNoteUpdate}) => {

const noteInputUpdated =(event:FocusEvent<HTMLHeadingElement>)=>
{
console.log("note text chnage")
const newTextValue=event.currentTarget.textContent

const updatedNoteObject:INote={
  ...note,
  text:newTextValue || '',
}
onNoteUpdate( updatedNoteObject)

}

  return (
    <div className='note'>
            <h4 
            onBlur={noteInputUpdated}  
            contentEditable={true} 
            suppressContentEditableWarning={true}
             className='note__text' >
                {note?.text}
            </h4>
            <h5 className='note__link'>
                <a href={note.link}>{note?.link}</a>
                </h5>
          </div>
  )
}

export default Note
