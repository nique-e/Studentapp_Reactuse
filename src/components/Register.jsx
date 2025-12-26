import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
     
  const navigate = useNavigate();

  const [formdata,setformdata] = useState({
    name:"",
    email:"",
    password:"",
    contact:"",
  });

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const formsubmit = async (e)=>{
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/register",formdata);
      alert("Registered Successfully Completed");

      setformdata({
        name:"",
        email:"",
        password:"",
        contact:"",
      });

      navigate("/student_list");
    } catch (err) {
      console.log(err);
      alert("Fail");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-5">

          <div className="card shadow">
            <div className="card-header bg-info text-white text-center">
              <h4 className="mb-0">Student Registration</h4>
            </div>

            <div className="card-body">
              <form onSubmit={formsubmit}>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={formdata.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter your address"
                    name="address"
                    value={formdata.address}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-info w-100">
                  Register
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register;
