import * as StudentModel from "../models/StudentModel.js";

export const fetchStudent = async (req, res) => {
    try {
        const Student = await StudentModel.getStudent();
        res.status(200).json({success: true, message: Student});  
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}