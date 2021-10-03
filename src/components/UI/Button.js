import { Button } from "@mui/material";
import { Colors } from "./colors";

export const MyButton = (props) => {
  const ButtonType = props.Type;
  const Style = {
 //   padding:'%',
   
    display: "block",
    marginTop: "3%",
  //  marginLeft:'3.6ch',
    width: "100%",
   
   /// padding:'5%',
    borderColor: ButtonType === "outlined" ? Colors.purple : "none",
    fontSize: "2.5ch",
    "&:hover":
      ButtonType === "outlined"
        ? { background: Colors.purple, color: "white" , }
        : {},
    color: ButtonType === "outlined" ? Colors.purple : "white",
  };

  const ButtonStyle={
      ...Style,
      
  }
  ///console.log(Style2)
  return (
    <Button
      variant={ButtonType === "outlined" ? "outlined" : "contained"}
      sx={ButtonStyle}
      onClick={props.onClick}
     
    >
      {props.ButtonText}
    </Button>
  );
};
