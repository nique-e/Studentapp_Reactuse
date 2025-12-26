import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold">
            Student Management System
          </h1>
          <p className="text-muted mt-3">
            Manage student registrations, view student details,
            and maintain records easily using a simple and clean system.
          </p>

          <div className="mt-4">
            <Link to="/register" className="btn btn-info me-3">
              Register Student
            </Link>
            <Link to="/student_list" className="btn btn-outline-dark">
              View Students
            </Link>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="students"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Easy Registration</h5>
              <p className="card-text text-muted">
                Quickly register new students with a simple form.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Student Records</h5>
              <p className="card-text text-muted">
                View all registered students in a clean table.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Fast & Secure</h5>
              <p className="card-text text-muted">
                Built with React and Spring Boot backend.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
