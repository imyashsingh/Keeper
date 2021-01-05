import Header from "./Header";
import Note from "./Note";
import Createnote from "./Createnote";
import { useState } from "react";

function App() {
  const [notedata, setnote] = useState([]);

  function addnote(data) {
    setnote((prev) => {
      return [...prev, data];
    });
  }

  function delnote(id) {
    setnote((prev) => {
      let temp = [];
      for (let i = 0; i < prev.length; i++) {
        if (i !== id) temp.push(prev[i]);
      }
      return temp;
    });
  }

  function allnote(ele, index) {
    return (
      <Note
        key={index}
        title={ele.title}
        text={ele.text}
        id={index}
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
