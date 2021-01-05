import React, { useState } from "react";

function Createnote(props) {
  const [data, setdata] = useState({
    title: "",
    text: "",
  });

  function change(e) {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitbut(e) {
    props.addnote(data);
    e.preventDefault();
  }
  return (
    <>
      <div className="createsec">
        <div className="createnote">
          <form onSubmit={submitbut}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={change}
            />
            <textarea
              placeholder="Take a Note"
              name="text"
              rows="4"
              value={data.text}
              onChange={change}
            />
            <div>
              <button className="but">+</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Createnote;
