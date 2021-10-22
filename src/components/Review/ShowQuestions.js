
import { CssTextAreaField } from "../UI/FormInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Colors } from "../UI/colors";
const ShowQuestions = (props) => {
  const type = props.Question.type;
  let SubmissionValue = null;
  if (type === "Objective") {
    const op1 = (
      <FormControlLabel
        value={props.Question.option1}
        control={<Radio />}
        label={props.Question.option1}
      />
    );

    const op2 = (
      <FormControlLabel
        value={props.Question.option2}
        control={<Radio />}
        label={props.Question.option2}
      />
    );
    const op3 = (
      <FormControlLabel
        value={props.Question.option3}
        control={<Radio />}
        label={props.Question.option3}
      />
    );
    const op4 = (
      <FormControlLabel
        value={props.Question.option4}
        control={<Radio />}
        label={props.Question.option4}
      />
    );
    SubmissionValue = (
      <RadioGroup
        aria-label={props.Question.Question}
        defaultValue={props.Question.option1}
        name="radio-buttons-group"
        sx={{
          color: Colors.purple,
          "& .MuiSvgIcon-root": {
            fontSize: 35,
          },
        }}
      >
        {props.Question.option1 && op1}
        {props.Question.option2 && op2}
        {props.Question.option3 && op3}
        {props.Question.option4 && op4}
      </RadioGroup>
    );
  } else {
    SubmissionValue = (
      <CssTextAreaField
        multiline="True"
        aria-label="minimum height"
        minRows="7"
        placeholder="Write your Honest Opinions/Reviews here"
        style={{ width: "40vw", height: "50vh", overflowY: "scroll" }}
      />
    );
  }
  return (
    <>
      <FormControl component="fieldset" sx={{ marginTop: "5%" }}>
        <h1>{props.Question.Question}</h1>
        {SubmissionValue}
      </FormControl>
      <hr style={{ borderTop: " 1px solid white" }} />
    </>
  );
};

export default ShowQuestions;
