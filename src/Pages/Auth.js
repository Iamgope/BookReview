
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import { useState } from "react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import {Colors} from '../components/UI/colors'
const AuthForm = (props) => {
    const [isLogin,setIsLogin]=useState(true);

  return (
    <Box
      sx={{
        margin: "auto",
        background: "white",
        padding: "5%",
        borderRadius: "2ch",
       
      }}
    >  {props.AuthError&&<h5 style={{color:'red',textAlign:'center'}}>Something went wrong</h5>}
      <ToggleButtonGroup sx={{width:'100%',margin:'2%',marginBottom:'5%'}}>
        <ToggleButton sx={{width:'50%',border:`${isLogin?`3px solid ${Colors.NotDark}`:"none"}`,borderRight:`3px solid ${Colors.NotDark}`, "&:hover":{background:Colors.purple,color:'white'}}} onClick={()=>setIsLogin(true)}>Sign In</ToggleButton>
        <ToggleButton sx={{width:'50%',border:`${!isLogin?`3px solid ${Colors.NotDark}`:"none"}`, '&:hover':{background:Colors.purple,color:'white'}}} onClick={()=>setIsLogin(false)}>Sign Up</ToggleButton>
      </ToggleButtonGroup>
     {isLogin? <Login handleClose={props.handleClose} AuthError={props.AuthError} setAuthError={props.setAuthError}/>:<SignUp  handleClose={props.handleClose} AuthError={props.AuthError} setAuthError={props.setAuthError}/>}
    </Box>
  );
};

export default AuthForm;
