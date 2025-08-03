import React, { useState } from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here if needed
    console.log("Form submitted:", form);
    alert("Registered Successfully!");
    // Reset form
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          required
        />

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

        <button type="submit">Register</button>
        <h4> Already have an account ?<Link to="/loginForm"> Login here</Link></h4>
      </form>
    </div>
  );
};

export default RegisterForm;
