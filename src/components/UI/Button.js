import { Button } from "@mui/material";
import { Colors } from "./colors";

export const MyButton = (props) => {
  const ButtonType = props.Type;
  const Style = {
    //   padding:'%',
    background: ButtonType === "contained" ? Colors.purple : "none",
    display: "block",
    marginTop: "3%",
    //  marginLeft:'3.6ch',
    width: "90%",
    margin: "1%",
    /// padding:'5%',
    borderColor: ButtonType === "outlined" ? Colors.purple : "none",
    fontSize: "2.5ch",
    "&:hover": { background: Colors.purple, color: "white" },

    color: ButtonType === "outlined" ? Colors.purple : "white",
  };

  const ButtonStyle = {
    ...Style,
  };
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
