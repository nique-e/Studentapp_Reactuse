import { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Email and Password required");
      return;
    }

    console.log("Login Data:", loginData);
    alert("Login Successful");

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                />

                <button className="btn btn-success w-100">
                  Login
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
