import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import "./index.css";
import { addToDo, getAllToDo,updateToDo,deleteToDo } from "./Utils/HandleApi";


function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsupdating] = useState(false);
  const [toDoId,setToDoId]=useState()
  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  const updateMode = (_id,text) => {
    setIsupdating(true);
    setText(text);
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add todo..........."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId,text,setTodo,setText,setIsupdating)
                : () => addToDo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item, index) => (
            <ToDo key={item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)} deleteToDo={()=>deleteToDo(item._id,setTodo)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
