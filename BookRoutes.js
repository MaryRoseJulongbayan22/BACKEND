import * as  BookControllers from '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookControllers.fetchBooks);
bookRoutes.post('/new', BookControllers.createBook) 
bookRoutes.put('/edit/:bookId', BookControllers.deleteBook);
bookRoutes.delete('/delete/:bookId', BookControllers.deleteBook);


export default bookRoutes;

