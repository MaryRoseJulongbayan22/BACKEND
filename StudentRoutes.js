import express from 'express';
import * as  StudentControllers from '../controllers/StudentController.js';
const studentRoutes = express.Router();

studentRoutes.get('/all', StudentControllers.fetchStudent);
studentRoutes.post('/new', StudentControllers.createStudent) 
studentRoutes.put('/edit/:studentId', StudentControllers.editStudent);
studentRoutes.delete('/delete/:studentId', StudentControllers.deleteStudent);



export default studentRoutes;

