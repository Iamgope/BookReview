import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Colors } from "../UI/colors";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { authActions } from "../../store/slices/auth";
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  // const [Error, setError] = useState(null);
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const loginBody = { username: UserName, password: Password };

    await axios
      .post("https://djangobookreview.herokuapp.com/auth/login/", loginBody)
      .then((res) => {
        dispatch(
          authActions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );

        console.log("hello", {
          token: res.data.access,
          refreshToken: res.data.refresh,
        });

        props.handleClose();
        history.push("/profile");
      })
      .catch((err) => props.setAuthError(true));
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <Box
          sx={{
            border: `2px solid ${Colors.lightPurple}`,
            padding: "5%",
            borderRadius: "10%",
            //borderTopRightRadius: "10%",
          }}
        >
          <h1 style={{ color: Colors.purple, textAlign: "center" }}>
            Welcome back
          </h1>

          <TextField
            fullWidth
            label="username"
            //id="fullWidth"
            value={UserName}
            onChange={handleUserNameChange}
            sx={{ marginTop: "5%" }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            /// id="fullWidth"
            value={Password}
            onChange={handlePasswordChange}
            sx={{ marginTop: "5%" }}
          />
        </Box>
        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: Colors.purple,
            border: `3px solid ${Colors.LightBlue}`,
            "&:hover": { background: Colors.purple, color: "white" },
            marginTop: "10%",
            fontSize: "2ch",
            textTransform: "none",
            width: "100%",
          }}
        >
          Sign In
        </Button>
      </form>
    </>
  );
};
export default Login;
