import * as  BookControllers from '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookControllers.fetchBooks);



export default bookRoutes;

