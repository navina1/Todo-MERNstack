import axios from "axios";

const baseUrl = "http://localhost:5000"

const getAllToDo = (setTodo) => {
    axios.get(baseUrl)
        .then(({ data }) => {
            console.log(data)
            setTodo(data)
    })
}

const addToDo = (text,setText,setTodo) => {
    axios.post(`${baseUrl}/save`, { text })
    .then((data)=>{
        console.log(data);
        setText("");
        getAllToDo(setTodo)
    })
}

const updateToDo=(toDoId,text,setToDo,setText,setIsUpdating) => {
    axios.post(`${baseUrl}/update`, {_id:toDoId, text })
    .then((data)=>{
        console.log(data);
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const deleteToDo=(toDoId,setToDo) => {
    axios.post(`${baseUrl}/delete`, {toDoId})
    .then((data)=>{
        console.log(data);
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}



export {getAllToDo,addToDo,updateToDo,deleteToDo}