const ToDoModal = require("../Models/Todomodel");

module.exports.getTodo = async (req, res) => {
  const todo = await ToDoModal.find();
  res.send(todo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModal.create({ text }).then((data) => {
      console.log("Added Sucessfully");
      console.log(data);
      res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    ToDoModal.findByIdAndUpdate(_id, { text })
        .then(() => res.send("updated successfully"))
        .catch((err)=>console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    ToDoModal.findByIdAndRemove(_id)
        .then(() => res.send("Deleted successfully"))
        .catch((err)=>console.log(err))
}
