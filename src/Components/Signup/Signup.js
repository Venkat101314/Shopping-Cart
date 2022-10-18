import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/api/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // send http request
    sendRequest().then(() => history("/login"));
  };
  return (
    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
      <div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
        <div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							name="name"
              onChange={handleChange}
              value={inputs.name}
              required
              variant="outlined"
              placeholder="Name"
							className={styles.input}
						/>
				
						<input
							name="email"
              onChange={handleChange}
              type={"email"}
              value={inputs.email}
              required
              variant="outlined"
              placeholder="Email"
              className={styles.input}
						/>
						<input
							name="password"
              onChange={handleChange}
              type="password"
              value={inputs.password}
              required
              variant="outlined"
              placeholder="Password"
              className={styles.input}
						/>
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
      
    </div>
    </div>
  );
};

export default Signup;