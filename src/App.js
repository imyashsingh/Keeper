import Header from "./Header";
import Note from "./Note";
import Createnote from "./Createnote";
import { useEffect, useState } from "react";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [notedata, setnote] = useState([]);

  useEffect(() => {
    db.collection("allnotedata")
      .orderBy("createdAt")
      .onSnapshot((snap) => {
        setnote(
          snap.docs.map((doc) => ({
            id: doc.id,
            notedata: doc.data().notedata,
          }))
        );
      });
  }, []);
  function addnote(data) {
    db.collection("allnotedata").add({
      notedata: data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  function delnote(id) {
    db.collection("allnotedata").doc(id).delete();
  }

  function allnote(ele) {
    return (
      <Note
        key={ele.id}
        title={ele.notedata.title}
        text={ele.notedata.text}
        id={ele.id}
        delnote={delnote}
      />
    );
  }
  return (
    <>
      <Header />
      <Createnote addnote={addnote} />
      <div className="note-flex">{notedata.map(allnote)}</div>
    </>
  );
}

export default App;
