import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Dummy_NOTES from './DUMMY_NOTES';
import Note from './compnonents/Note';
import INote from './interfaces/note.interfaces';
function App() {

  // let notesList:any[]=[]; react changes its UI only for the state hook so we make hook for this
  const [notesList, setNotesList] = useState<Array<INote>>([]);
  // setNotesList(Dummy_NOTES);

  useEffect(() => {
    const listFromStorageString = localStorage.getItem("my-notes");
    if (listFromStorageString === null) {
      setNotesList(Dummy_NOTES);
    }
    else {
      const listFromStorageArray = JSON.parse(listFromStorageString);
      setNotesList(listFromStorageArray);
    }
  },[]);


useEffect(() => {
  console.log("saving to local storage")
  const noteListString = JSON.stringify(notesList)
  localStorage.setItem('my-notes', noteListString)

}, [notesList])


console.log(notesList)


// const getNotes=async()=>{
//   try{
//     const response = await axios.get("http://localhost:5000/notes")
//     setNotesList(response.data.notes);
//     console.log(notesList)
//   }
//   catch(err){
//     console.log(err)

//   }
console.log("rerendering")
console.log(notesList)
const updateNoteItem = (updatedNote: INote) => {
  // console.log("value updated in the app component")
  // console.log(updatedNote);

  const updatedList = notesList.map((noteItem: INote) => {
    if (noteItem._id === updatedNote._id) {
      return updatedNote;
    }
    return noteItem;

  })
  setNotesList(updatedList)

}


return (
  <div className="App">
    <div>Notes Application</div>
    {/* <div><button onClick={getNotes}>Click Me!</button></div> */}
    <div className='notes-list'>
      {notesList.map((noteItem, index) => {
        return (
          <Note note={noteItem} onNoteUpdate={updateNoteItem} key={index} />
        )
      })}

    </div>

  </div>
);
}

export default App;
