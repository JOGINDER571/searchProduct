import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { React, useState, useEffect } from "react";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
//   const navigate = useNavigate();

  const [tabValue, setTabValue] = useState("student");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    console.log(newValue);
  };

//   useEffect(() => {
//     navigate("/signup");
//   }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const mainContainer = {
    width: "100vw",
    height: "100vh",
    placeItems: "center",
    backgroundColor: "#f2fffb",
  };

  const paperStyle = {
    padding: "5vh",
    height: "auto",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { marginTop: "4vh" };
  const font = { fontSize: 17 };
  return (
    <>
      <Grid style={mainContainer} display="grid">
        <Paper className="paper" elevation={10} style={paperStyle}>
          <h1 style={{ margin: "10px", textAlign: "center", color: "#1976d2" }}>
            Login{" "}
          </h1>
          <Grid>
            <form
              style={{ marginTop: "5vh" }}
              noValidate
              onSubmit={submitHandler}
            >
              <Grid>
                <TextField
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="@example.com"
                  fullWidth
                  required
                ></TextField>
                <TextField
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  sx={{ mt: 2 }}
                  placeholder="Enter Password"
                  type="password"
                  fullWidth
                  required
                ></TextField>
                <Typography style={btstyle}>
                  <Link to="#">Forgot Password</Link>
                </Typography>
              </Grid>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btstyle}
                fullWidth
              >
                Login
              </Button>
            </form>
            <Grid style={{ marginTop: "3vh" }}>
              <Typography style={font}>
                New to Organisation? <Link to="/signup"> Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
