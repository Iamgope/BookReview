import { Paper } from "@mui/material";
import { Colors } from "./colors";
const SelectionPaper = (props) => {
  return (
    <Paper
      sx={{
        height: "10vh",
        padding: "3%",
        textAlign: "center",
        border: `2px solid ${+props.currPage === 1 ? Colors.purple : "white"}`,
      }}
    >
      {props.children}
    </Paper>
  );
};
export default SelectionPaper;
