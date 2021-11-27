import { CssTextAreaField } from "../UI/FormInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Colors } from "../UI/colors";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useRef } from "react";

const ShowQuestions = (props) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const AnswerRef = useRef("");
 
  const selectedAnswer = () => {
   // console.log(AnswerRef.current.value);
    props.selectedAnswer(AnswerRef.current.value);
  };
  const type = props.Question.type;
  let SubmissionValue = null;
  if (type === "objective") {
    const op1 = (
      <FormControlLabel
        value={props.Question.option1}
        control={<Radio />}
        label={props.Question.option1}
        onChange={() => props.selectedAnswer(props.Question.option1)}
      />
    );

    const op2 = (
      <FormControlLabel
        value={props.Question.option2}
        control={<Radio />}
        label={props.Question.option2}
        onChange={() => props.selectedAnswer(props.Question.option2)}
      />
    );
    const op3 = (
      <FormControlLabel
        value={props.Question.option3}
        control={<Radio />}
        label={props.Question.option3}
        onChange={() => props.selectedAnswer(props.Question.option3)}
      />
    );
    const op4 = (
      <FormControlLabel
        value={props.Question.option4}
        control={<Radio />}
        label={props.Question.option4}
        onChange={() => props.selectedAnswer(props.Question.option4)}
      />
    );
    SubmissionValue = (
      <RadioGroup
        aria-label={props.Question.Question}
        defaultValue={null}
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
        ref={AnswerRef}
        onChange={selectedAnswer}
        placeholder="Write your Honest Opinions/Reviews here"
        style={{
          width: isMobile ? "75vw" : "40vw",
          height: "50vh",
          overflowY: "scroll",
        }}
      />
    );
  }

  return (
    <>
      <FormControl component="fieldset" sx={{ marginTop: "5%" }}>
        <h2 style={{ fontSize: isMobile ? "1.8ch" : "2.5ch" }}>
          {props.Question.question}
        </h2>
        {SubmissionValue}
      </FormControl>
      <hr style={{ borderTop: " 1px solid white" }} />
    </>
  );
};

export default ShowQuestions;
