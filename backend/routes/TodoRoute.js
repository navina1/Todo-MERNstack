const {Router} = require("express");
const { getTodo, saveToDo, updateToDo, deleteToDo } = require("../controller/ToDoController");
const router = Router();

router.get('/', getTodo);
router.post('/save', saveToDo);
router.post('/delete', deleteToDo);
router.post('/update', updateToDo);

module.exports = router;