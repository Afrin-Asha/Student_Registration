// import { CreateStudent, ReadStudent, ReadStudentByID, UpdateStudent, DeleteStudent } from '../controller/StudentController';
const express =require('express');
const StudentController=require("../controller/StudentController")
const router =express.Router();

//API routing end point
//Create
router.post('/create',StudentController.CreateStudent);
//Read
router.get('/student-list',StudentController.ReadStudent);
router.get('/student-list-by-id/:id',StudentController.ReadStudentById);

//Update
router.post('/update/:id',StudentController.UpdateStudent);
//Delete
router.get('/delete/:id',StudentController.DeleteStudent);


module.exports = router;