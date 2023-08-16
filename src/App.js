import './App.css';
import { useEffect, useReducer, useRef, useState } from 'react';
import Popup from './Popup';
import LoginArea from './LoginArea';
import React from 'react';
import SelectTextArea from './SelectTextArea';
import SentFile from './SentFile';
import Box from './Box';
import Grid from './Grid';
import Notification from './Notification';
import AppHeader from './AppHeader';
import PageHome from './PageHome';
import PageAbout from './PageAbout';
import { Route, Routes } from 'react-router-dom';
import Page404 from './Page404';
import PagePost from './PagePost';



// const startNode = {
//   content: '', author: ''
// };

// UseContext
// const AuthContext = React.createContext();

// UseReducer
// function reducer(state, action) {
//   if (action.type === 'login') {
//     const { username, fullname } = action.payload;
//     return { username, fullname };
//   }
//   if (action.type === 'logout') {
//     return null;
//   }
//   return state;
// }

function App() {
  // States
  // const [note, setNote] = useState({ startNode });
  // const [editNote, setEditNote] = useState(null);
  // const [allNotes, setAllNotes] = useState([]);

  // // Functions form inputs
  // function onNoteValueChange(event) {
  //   const { name, value } = event.target;
  //   setNote((preNote) => {
  //     return {
  //       ...preNote,
  //       [name]: value
  //     }
  //   })
  // }

  // function onEditNoteValueChange(event) {
  //   const { name, value } = event.target;
  //   setEditNote((preNote) => {
  //     return {
  //       ...preNote,
  //       [name]: value
  //     }
  //   })
  // }

  // // Function add, edit, delete

  // function onNoteSubmit(event) {
  //   event.preventDefault();

  //   setAllNotes((preAllNotes) => {
  //     const newNote = { ...note };
  //     newNote.id = Date.now().toString();
  //     return [newNote, ...preAllNotes];
  //   });

  //   setNote(startNode)
  // }

  // function onNoteDelete(noteId) {
  //   setAllNotes((preAllNotes) => {
  //     return preAllNotes.filter((theNote) => theNote.id !== noteId);
  //     ;
  //   });
  // }

  // // Elements
  // const noteElements = allNotes.map((theNote) => {
  //   return (
  //     <div key={theNote.id} className="app-note">
  //       <p>{theNote.content}</p>
  //       <h5>{theNote.author}</h5>
  //       <p>
  //         <a onclick={() => { setEditNote(theNote) }}>Edit</a>
  //         <span> | </span>
  //         <a onClick={() => { onNoteDelete(theNote.id) }}>Delete</a>
  //       </p>
  //     </div>
  //   )
  // });

  // let editNoteElement = null;
  // if (!!editNote) {
  //   editNoteElement = (
  //     <div className="app-edit-note">
  //       <form >
  //         <p>
  //           <textarea
  //             rows="3"
  //             placeholder="Note Daily"
  //             name="content"
  //             value={editNote.Content}
  //             onC

  //           />
  //         </p>
  //         <p>
  //           <input
  //             type="text"
  //             placeholder="Sign in"
  //             name="author"
  //             value={editNote.Author}

  //           />
  //         </p>
  //         <p>
  //           <button type="submit">Add</button>
  //         </p>
  //       </form>
  //     </div>
  //   )
  // }

  // return (
  //   <section className="app-section">
  //     <div className="app-container">
  //       <h3>Hello Notes</h3>
  //       <form onSubmit={onNoteSubmit}>
  //         <p>
  //           <textarea
  //             rows="3"
  //             placeholder="Note Daily"
  //             name="content"
  //             value={note.Content}
  //             onChange={onNoteValueChange}
  //           />
  //         </p>
  //         <p>
  //           <input
  //             type="text"
  //             placeholder="Sign in"
  //             name="author"
  //             value={note.Author}
  //             onChange={onNoteValueChange}
  //           />
  //         </p>
  //         <p>
  //           <button type="submit">Add</button>
  //         </p>
  //       </form>
  //       <div className="app-notes">
  //         {noteElements}
  //       </div>
  //     </div>
  //     {editNoteElement}
  //   </section>
  // );

  //

  // Set Data, Components -> useState
  //   const [isPopupOpen, setIsPopupOpen] = useState(false);

  //   let popup = null;
  //   if (isPopupOpen) {
  //     popup = <Popup onPopupClose={() => setIsPopupOpen(false)} />
  //   }

  //   return (
  //     <section className="app-section" >
  //       <div className="app-container">
  //         <h1>Hello</h1>
  //         <button onClick={() => setIsPopupOpen(true)}>Open Popup</button>
  //       </div>
  //       {popup}
  //     </section>
  //   );

  // useContext
  // const [auth, setAuth] = useState(null);
  // const [authState, authDispatch] = useReducer(reducer, null);
  // return (
  //   <AuthContext.Provider value={{ authState, authDispatch }}>
  //     <section className="app-section" >
  //       <div className="app-container">
  //         <LoginArea />
  //       </div>
  //     </section>
  //   </AuthContext.Provider>

  // )

  // useRef
  // useForwardRef + useRef for make component
  // const textAreaRef = useRef(null);
  // const fileRef = useRef(null);

  // function onAllTextClick() {
  //   textAreaRef.current.focus();
  //   textAreaRef.current.select();
  // }

  // function onUploadClick() {
  //   const myFile = fileRef.current.files[0];
  //   console.log(myFile);
  // }

  // Style Module and inline style
  // return (
  //   <section className="app-section" >
  //     <div className="app-container">
  //       <h2>Hello</h2>
  //       <SelectTextArea onAllTextClick={onAllTextClick} ref={textAreaRef} />
  //       <SentFile onUploadClick={onUploadClick} ref={fileRef} />


  //     </div>
  //   </section>
  // );

  // return (
  //   <section className="app-section">
  //     <div className="app-container">
  //       <h2>Farm Dashboard</h2>
  //       <Notification
  //         title="Hello"
  //         description="We come for peaceful"
  //         level="danger"
  //       />
  //       <Grid columns={3}>
  //         <Box title="Order by day">
  //           <ul>
  //             <li>1 jun - 1,324 Order</li>
  //             <li>2 jun - 1,544 Order</li>
  //             <li>3 jun - 1,789 Order</li>
  //           </ul>
  //         </Box>

  //         <Box title="Total sell item popular">

  //           <p>Mark: This price is average</p>
  //           <ol>
  //             <li>Carrot ~ 200,000 Bath</li>
  //             <li>Tomato ~ 120,000 Bath</li>
  //             <li>Apple ~ 105,000 Bath</li>
  //           </ol>
  //         </Box>

  //         <Box title="Quote of the day">

  //           <ul>
  //             <p>No one know</p>
  //             <p>Make to day is the best day</p>

  //           </ul>
  //         </Box>
  //       </Grid>
  //     </div>
  //   </section>
  // )

  // React-Router

  // Mix Routes = loby Route = Rooms AppHeader = Navbar 
  // and + Dynamic Routes like page view 1,2,3 show data 10,10,10 
  // return (
  //   <div className="App">
  //     <AppHeader />
  //     <Routes>
  //       <Route path="/" element={<PageHome />} />
  //       <Route path="about" element={<PageAbout />} />
  //       <Route path="/post/:postId" element={<PagePost />}></Route>
  //       <Route path="*" element={<Page404 />} />
  //     </Routes>
  //   </div>
  // )

  //Testing Library


}

// export { AuthContext };
export default App;
