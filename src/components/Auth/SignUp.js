import React, { useState, Fragment } from "react";
import axiosInstance from "../Api/AxiosApi";
import { Button, TextField } from "@mui/material";
import { Colors } from "../UI/colors";
import { Box } from "@mui/system";





const SignUp = (props) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Firstname, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
 
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    
    try {
        console.log({
            username: UserName,
        password: Password,
        password2: Password2,
        first_name:Firstname,
        last_name:'Aman',
        email:Email
        })
      const response = await axiosInstance.post("/auth/register/", {
        username: UserName,
        password: Password,
        password2: Password2,
        first_name:Firstname,
        last_name:'Aman',
        email:Email
      });
    //   axiosInstance.defaults.headers["Authorization"] =
    //     "JWT " + response.data.access;
    //   localStorage.setItem("access_token", response.data.access);
    //   localStorage.setItem("refresh_token", response.data.refresh);
      props.handleClose();
      return response;
    } catch (error) {
      throw error;
    }
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstname = (event) => {
    setFirstName(event.target.value);
  };

  //   const LoginPersonBox = {
  //     background: Colors.purple,
  //     color: "white",
  //     width: 70,
  //     height: 70,
  //     boxShadow: "none",
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
  //     display:'block'
  //   //  marginLeft: "40%",
  //   };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <Box
          sx={{
            border: `2px solid ${Colors.lightPurple}`,
            padding: "5%",
            borderRadius: "10%",
           // borderTopRightRadius: "10%",
          }}
        >
          <TextField
            fullWidth
            label="First Name"
            value={Firstname}
            onChange={handleFirstname}
            sx={{ marginTop: "5%" }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            /// id="fullWidth"
            value={Email}
            onChange={handleEmail}
            sx={{ marginTop: "5%" }}
          />

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
          <TextField
            fullWidth
            label="Password Again"
            type="password"
            /// id="fullWidth"
            value={Password2}
            onChange={handlePassword2}
            sx={{ marginTop: "5%" }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: Colors.purple,
            marginTop: "10%",
            fontSize: "2ch",
            textTransform: "none",
            width: "100%",
          }}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};
export default SignUp;
