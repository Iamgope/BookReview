import { Fab, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Classes from "./AddQuestion.module.css";
import { Colors } from "../../UI/colors";
import { useState, useRef } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";

// const defaultQuestionState = {
//   subjective: true,

//   errorText: null,
// };
// const QuestionReducer = (state, action) => {
//   if (action.type === "Change") {
//     state.subjective = action.changeTo === 0 ? false : true;
//   } else if (action.type === "Add") {
//     if (state.subjective) {
//       const Question = {
//         Question: action.question.QuestionText,
//         type: "subjective",
//       };
//       console.log(Question);
//     } else {
//       const Question = {
//         Question: state.question.QuestionText,
//         type: "objective",
//         option1: action.question.one,
//         option2: action.question.two,
//         option3: action.question.three,
//         option4: action.question.four,
//       };
//       console.log(Question);
//     }
//   }
// };
const AddQuestions = (props) => {
  const { ReviewId } = useParams();

  //   const [QuestionState, dispatchQuestionAction] = useReducer(
  //     QuestionReducer,
  //     defaultQuestionState
  //   );

  //   const AddQuestionHandler = () => {
  //     dispatchQuestionAction({
  //       type: "Add",
  //       question: {
  //         QuestionText: QuestionTextRef.current.value,
  //         one: Option1Ref.current.value,
  //         two: Option2Ref.current.value,
  //         three: Option3Ref.current.value,
  //         four: Option4Ref.current.value,
  //       },
  //     });
  //   };

  //   const ChangeQuestionTypeHandler = (changeTo) => {
  //     dispatchQuestionAction({
  //       type: "Change",
  //       changeTo: changeTo,
  //     });
  //   };
  const [Objective, setObjective] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  const QuestionTextRef = useRef("");
  const Option1Ref = useRef(null);
  const Option2Ref = useRef(null);
  const Option3Ref = useRef(null);
  const Option4Ref = useRef(null);

  const onSubmitQuestion = () => {
    const question = Objective
      ? {
          question: QuestionTextRef.current.value,
          type: "objective",
          option1: Option1Ref.current.value,
          option2: Option2Ref.current.value,
          option3: Option3Ref.current.value,
          option4: Option4Ref.current.value,
          AssociatedPost: ReviewId,
        }
      : {
          question: QuestionTextRef.current.value,
          type: "subjective",
          option1: null,
          option2: null,
          option3: null,
          option4: null,
          AssociatedPost: ReviewId,
        };

    if (question.type === "objective") {
      if (
        question.option1.trim().length === 0 ||
        question.option2.trim().length === 0
      ) {
        setErrorText("include atleast option 1 and option 2");
        return;
      } else if (
        question.option4.trim().length !== 0 &&
        question.option3.trim().length === 0
      ) {
        setErrorText("don't leave previous options blank");
        return;
      } else {
        setErrorText("");
      }
    }
    props.onAddQuestions(question);
    console.log(question);
  };
  return (
    <div className={Classes["input-div"]}>
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
      <h4 style={{ color: "red" }}>{ErrorText}</h4>
      <input
        type="text"
        placeholder="Place your Questions"
        ref={QuestionTextRef}
      />
      <Fab
        sx={{
          display: "block",
          margin: "auto",
          marginTop: "5%",
          background: Colors.purple,
          "&:hover": { background: Colors.purple },
        }}
      >
        <ArrowBack
          sx={{ transform: "rotateY(180deg)", color: "white" }}
          onClick={onSubmitQuestion}
        />
      </Fab>
      {Objective && (
        <div style={{ width: "80%", margin: "auto" }}>
          <input
            type="text"
            placeholder="Option 1"
            ref={Option1Ref}
            id="option1"
          />
          <input
            type="text"
            placeholder="Option 2"
            ref={Option2Ref}
            id="option2"
          />
          <input
            type="text"
            placeholder="Option 3"
            ref={Option3Ref}
            id="option3"
          />
          <input
            type="text"
            placeholder="Option 4"
            ref={Option4Ref}
            id="option4"
          />
        </div>
      )}
    </div>
  );
};

export default AddQuestions;
