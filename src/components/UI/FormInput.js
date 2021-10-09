import { TextField, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "./colors";
export const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: Colors.LightBlue,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: Colors.purple,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: Colors.purple,
      },
    },
   
  
  });

  export const CssTextAreaField = styled(TextareaAutosize)({
    background: "rgba(187, 205, 242, 0.37)",
    border: `3px solid white`,
    borderRadius: "10%",
    padding: "5%",
    margin:'auto',
    "&:focus": {
      border: `3px solid ${Colors.purple}`,
    },
    color: Colors.purple,
    fontSize: "3ch",
    fontWeight: "bold",
  });