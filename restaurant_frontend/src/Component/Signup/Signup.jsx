import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from "./signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("customer");
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const navigate = useNavigate(); // Used for navigation after successful signup

  async function formHandle(e) {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || phone === "") {
      setErrorMessage("Please enter all required details.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/user/register', {
        username: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        phone_number: phone,
        role: role
      });

      if (response.data.status === "Success") {
        setSuccessMessage("Registration successful!");
        // Redirect to login page after 2 seconds
        setTimeout(() => navigate("/signin"), 2000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
    }
  }

  return (
    <div className={style.head}>
      <div className={style.form}>
        <h1>SignUp</h1>
        <hr style={{ height: "2px", width: "200px", border: "none", backgroundColor: "rgb(129, 192, 132)" }} />
        <form onSubmit={formHandle}>
          <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <input type="number" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="owner">Admin</option>
            <option value="staff">Employee</option>
          </select>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Display error message */}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} {/* Display success message */}
          <button type="submit">Register</button>
          <button id={style.btn}><Link to={"/signin"} style={{ color: "rgb(54, 83, 55)", textDecoration: "none", fontSize: "23px" }}>Signin</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
