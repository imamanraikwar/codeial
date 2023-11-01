
import express from 'express';
const router = express.Router();
import { home_Controller,createTodo,deleteTodo,EditPage,editDetails } from '../controller/controller_home.js';

router.get('/',home_Controller)
router.post('/create_todo',createTodo) //controller for creating todo list
router.post('/delete_todo',deleteTodo) // controller for deleting the todo list
router.get('/editdata',EditPage)       // controller for getting Edit page
router.post('/edit-todolist',editDetails) // conteoller for Edting todo list


export default router;