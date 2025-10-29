import * as  StudentControllers from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentControllers.fetchStudent);



export default studentRoutes;

