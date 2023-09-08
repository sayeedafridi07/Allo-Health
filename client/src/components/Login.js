import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        console.error("Login failed", errorData.message);
        return;
      }

      const data = await response.json();


      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location = "/";
        console.log("Login successful", data);
      } else {
        console.error("Login failed", "Invalid token received");
      }
    } catch (error) {
      setError(error.message);
      console.error("Login failed", error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card bg-glass shadow p-3 mb-5 rounded"
        style={{ maxWidth: 800 }}
      >
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body mt-5">
              <div className="col-md-12">
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="my-3 form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="my-3 form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="text-center">
                      <button type="submit" className="login-button">
                        Login
                      </button>
                    </div>
                  </div>
                  {error && <div className="alert my-2">❌ {error}</div>}
                </form>
                <div className="text-center mt-3">
                  <p>
                    Don't have an account?{" "}
                    <NavLink to="/signup">Sign Up</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
