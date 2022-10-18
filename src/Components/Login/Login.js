import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate, Link } from "react-router-dom";
import { authActions } from "../../store/index";

const Login = () => {
    const history = useNavigate();
  const [inputs, setInputs] = useState({
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
    const res = await axios.post("http://localhost:5000/api/login", {
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
    sendRequest()
      .then(() => history("/user"));
  };
  return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
  
						<h1>Login to Your Account</h1>

          <input
            name="email"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            variant="outlined"
            placeholder="Email"
            className={styles.input}
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            value={inputs.password}
            variant="outlined"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.green_btn}>
            Login
          </button>
      </form>
      </div>
      <div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
      </div>
    </div>
  );
};

export default Login;