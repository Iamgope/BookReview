import { Typography } from "@mui/material";
import { Fragment } from "react";
import { MyButton } from "../UI/Button";
import { Colors } from "../UI/colors";
export const ListItem = (props) => {
  const Condition = props.Condition;
  return (
    <li style={{ marginBottom: "0.5ch" }}>
      <Typography variant="subtitle1" sx={{ color: Colors.purple }}>
        {Condition}
      </Typography>
    </li>
  );
};
const BookRequestPage = (props) => {
  return (
    <Fragment>
      <ul
        style={{
          listStyle: "none",
          backgroundColor: "white",
          borderRadius: "10%",
          padding: "5%",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: Colors.purple, fontWeight: 600, margin: "2%" }}
        >
          By This you Agree to our privacy policy
        </Typography>
        
        <ListItem Condition="Aliquip fugiat adipisicing dolor dolor non enim quis tempor ea ipsum quis." />
        <ListItem Condition="Aliquip fugiat adipisicing dolor dolor non enim quis tempor ea ipsum quis." />
        <ListItem Condition="Aliquip fugiat adipisicing dolor dolor non enim quis tempor ea ipsum quis." />
        <ListItem Condition="Aliquip fugiat adipisicing dolor dolor non enim quis tempor ea ipsum quis." />
        <ListItem Condition="Aliquip fugiat adipisicing dolor dolor non enim quis tempor ea ipsum quis." />
      </ul>
      <div style={{ display: "flex", width: "80%", margin: "auto" }}>
        <MyButton
          ButtonText="Accept"
          onClick={() =>{}}
          Type="contained"
        />
        <MyButton
          ButtonText="Cancel"
          onClick={() => props.handleClose()}
          Type="outlined"
        />
      </div>
    </Fragment>
  );
};
export default BookRequestPage;
