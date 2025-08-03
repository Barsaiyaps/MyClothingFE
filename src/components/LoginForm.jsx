import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call)
    console.log("Login submitted:", form);
    alert("Login Successful!");
    // Reset form
    setForm({ email: "", password: "" });
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
       <h4> Don't have an account ?<Link to="/registerForm"> Register here</Link></h4>
      </form>
    </div>
  );
};

export default LoginForm;
