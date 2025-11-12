import * as  StudentControllers from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentControllers.fetchStudent);
studentRoutes.post('/new', StudentControllers.createStudent) 
studentRoutes.put('/edit/:studentId', StudentControllers.deletestudent);
studentRoutes.delete('/delete/:bookId', StudentControllers.deletestudent);



export default studentRoutes;

