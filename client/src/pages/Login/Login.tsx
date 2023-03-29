import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Credentials } from "./types";
import { FormCont } from "../Register/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { RootState } from "../../redux/store";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  } as Credentials);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.alerts);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(showLoading());
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        credentials
      );
      if (res.data.success) {
        dispatch(hideLoading());
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      } else {
        dispatch(hideLoading());
        console.log(res.data);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  return (
    <FormCont onSubmit={(event) => handleSubmit(event)}>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>Login</h1>
          <TextField
            variant="filled"
            label="Email"
            type="text"
            name="email"
            required
            value={credentials.email}
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
          />
          <TextField
            variant="filled"
            label="Password"
            type="text"
            name="password"
            required
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
          <Button
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
            type="submit"
          >
            Register
          </Button>
          <p>
            Don't have an account? Register <Link to="/register">here.</Link>
          </p>
        </>
      )}
    </FormCont>
  );
};

export default Login;
