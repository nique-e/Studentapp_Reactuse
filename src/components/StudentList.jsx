import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students");
      setStudents(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load students");
    }
  };

  const deleteStudent = async (id) => {
    if(window.confirm("Are you sure ?")){
      try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      alert("Are you sure?");
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }}
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-3 text-center">Student List</h3>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No students found
              </td>
            </tr>
          ) : (
            students.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.address}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>
                  &nbsp;
                   <button
                    className="btn btn-success btn-sm">
                    Profile Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
