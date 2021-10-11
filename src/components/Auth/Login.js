import React, { useState } from "react";
import axiosInstance from "../Api/AxiosApi";
import { Button, TextField } from "@mui/material";
import { Colors } from "../UI/colors";
import { Box } from "@mui/system";
///import PersonIcon from "@mui/icons-material/Person";
const Login = (props) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  ////const [Open, setOpen] = useState(false);
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    // console.log(UserName,Password);
    //return;
    try {
      const response = await axiosInstance.post("/auth/login/", {
        username: UserName,
        password: Password,
      });
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + response.data.access;
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
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
            //borderTopRightRadius: "10%",
          }}
        >
              <h1 style={{color:Colors.purple,textAlign:'center'}}>Welcome back</h1>

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
            color:Colors.purple,
            border:`3px solid ${Colors.LightBlue}`,
           '&:hover':{ background: Colors.purple,color:'white'},
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
