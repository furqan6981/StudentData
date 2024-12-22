import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Data = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      let response = await fetch('http://localhost:5000/students')
      let data = await response.json()
      setStudents(data)
    } catch (error) {
      toast.error("Error fetching students");
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5">Student List</h2>
      {students.length > 0 ? (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.studentId}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.phone}</td>
                <td>{student.gender}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default Data;
