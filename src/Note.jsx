function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button className="notedel" onClick={() => props.delnote(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
