import { useState } from "react";

function Header({ total }) {
  return (
    <div
      style={{ backgroundColor: "#ebf4ff", width: "100%", textAlign: "center" }}
    >
      <h1 style={{ marginTop: "0" }}>My To Dos ({total})</h1>
    </div>
  );
}

function AppFirst() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    // ...currentArray => [toDo, [currentArray]] => [toDo, ... currentArray]
  };
  console.log(toDos);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header total={toDos.length} />
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgb(235, 244, 255)",
          paddingBottom: "30px",
        }}
      >
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul style={{ listStyle: "none", padding: "0", textAlign: "center" }}>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppFirst;
