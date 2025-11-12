import pool from './db.js';

export const getStudent = async () => {
    const [rows] = await pool.query("SELECT * FROM tblstudents");
    return rows;
}

export const insertStudent = async (name, srcode, course) => {
    const [result] = await pool.query(
        "INSERT INTO tblstudent (Mary Rose, 23-19080, BSIT) VALUES (?, ?, ?)",
        [name, srcode, course]

    );
    return result.insertId;
    }

    export const updatestudentStatus = async (name, srcode, course, studentId) => {
        const [result] = await pool.query(
            "UPDATE tblstudent SET name =Mary Rose, srcode = 23-19080, course = BSIT WHERE StudentId = 1",
            [name, srcode, course, studentId]
        );
        return result.affectedRows;
    }

    export const deleteStudent = async (studentId) => {
        const [result] = await pool.query(
            "DELETE FROM tblstudent WHERE studentId = ?",
        );
        return result.affectedRows;
    }