import { Fab, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Classes from "./AddQuestion.module.css";
import { Colors } from "../../UI/colors";
import { useState, Fragment } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";

const AddQuestions = (props) => {
  const [Objective, setObjective] = useState(false);

  return (
    <Fragment>
      <ToggleButtonGroup sx={{ marginBottom: "10%" }}>
        <ToggleButton
          onClick={() => setObjective(true)}
          sx={{
            color: Colors.purple,
            background: Objective ? Colors.LightBlue : "",
            fontWeight: 600,
          }}
        >
          Objective
        </ToggleButton>
        <ToggleButton
          onClick={() => setObjective(false)}
          sx={{
            color: Colors.purple,
            background: !Objective ? Colors.LightBlue : "",
            fontWeight: 600,
          }}
        >
          Subjective
        </ToggleButton>
      </ToggleButtonGroup>

      <input type="text" placeholder="Place your Questions" />
      <Fab
        sx={{
          display: "block",
          margin: "auto",
          marginTop: "5%",
          background: Colors.purple,
          "&:hover": { background: Colors.purple },
        }}
      >
        <ArrowBack sx={{ transform: "rotateY(180deg)", color: "white" }} />
      </Fab>
      {Objective && (
        <div style={{ width: "80%", margin: "auto" }}>
          <input type="text" placeholder="Option 1" />
          <input type="text" placeholder="Option 2" />
          <input type="text" placeholder="Option 3" />
          <input type="text" placeholder="Option 4" />
        </div>
      )}
    </Fragment>
  );
};

export default AddQuestions;
