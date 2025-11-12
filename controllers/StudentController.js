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

export const createStudent = async (req, res) => {
    const {name, srcode, course} = req.body
    try {
        const studentId = await studentModel.insertStudent(name, srcode, course);
        res.status(200).json ({success: true, message: bookId})
    }catch(e){
            console.log(e)
            res.status(500).json({success :false, message: "Internal Server Error"})

        }
    }
        
    export const deletestudent = async (req, res) => {
        const {studentId} = req.params;

        try {
            const deletedId = await studentModel.deletestudent(studentId);
            res.status(200).json({success: true, message: deletedId});
        }catch(e){
            console.log(e);
            res.status(500).json({success: false, message: "Internal Server Error"});
            
        }

    }

