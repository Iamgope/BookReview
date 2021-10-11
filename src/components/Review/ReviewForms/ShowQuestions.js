import { Paper, TextareaAutosize, ToggleButtonGroup } from "@mui/material";
import NiceOption from "../../UI/NiceOptions";
import { CssTextAreaField } from "../../UI/FormInput";
const ShowQuestions = (props) => {
  const type = props.Question.type;
  let SubmissionValue = null;
  if (type === "Objective") {
    const op1 = (
      <NiceOption
        value={props.Question.option1}
        onClick={() => console.log("nicebutton")}
      />
    );

    const op2 = (
      <NiceOption
        value={props.Question.option2}
        onClick={() => console.log("nicebutton")}
      />
    );
    const op3 = (
      <NiceOption
        value={props.Question.option3}
        onClick={() => console.log("nicebutton")}
      />
    );
    const op4 = (
      <NiceOption
        value={props.Question.option4}
        onClick={() => console.log("nicebutton")}
      />
    );
    SubmissionValue = (
      <ToggleButtonGroup
        orientation="vertical"
        sx={{ margin: "auto", marginTop: "10%" }}
      >
        {props.Question.option1 && op1}
        {props.Question.option2 && op2}
        {props.Question.option3 && op3}
        {props.Question.option4 && op4}
      </ToggleButtonGroup>
    );
  } else {
    SubmissionValue = (
      
          <CssTextAreaField 
          multiline="True"
          aria-label="minimum height"
          minRows="7"
          placeholder="Write your Honest Opinions/Reviews here"
          style={{ width: "40vw", height:'50vh',overflowY:'scroll'}}
          />
      
    );
  }
  return (
    <>
      <h2>{props.Question.Question}</h2>
      {SubmissionValue}
    </>
  );
};

export default ShowQuestions;
