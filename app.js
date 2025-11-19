import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/studentRoutes.js";
import bookRoutes from "./routers/bookRoutes.js";
import userRoutes from "./routers/userRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

app.use('/student', studentRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);

try{
app.listen(process.env.PORT || 3000, () => {
    console.log(`listening to port ${process.env.PORT || 3000}...`);

})

}catch(error){
 console.log(error);
}
