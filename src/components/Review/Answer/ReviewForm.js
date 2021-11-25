import { useState } from "react";
import ShowQuestion from "../ShowQuestions";
import { Colors } from "../../UI/colors";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Fab } from "@mui/material";
const SampleReviewQuestions = [
  {
    id: "question1",
    type: "subjective",
    question: "Worst thing about this book?",
  },
  {
    id: "question2",
    type: "objective",
    question: "Most lovable Character?",
    option1: "Jude",
    option2: "Tyler",
    option3: "Sang-Woo",
    option4: "Ruby Matthews",
  },
  {
    id: "question3",
    type: "objective",
    question: "Most irratating Character among them?",
    option1: "Paul",
    option2: "Mccarteny",
    option3: "emma",
    option4: null,
  },
  {
    id: "question4",
    type: "Subjective",
    question: "what should i change in reference to storyline?",
  },
  {
    id: "question5",
    type: "objective",
    question: "Most irratating Character in the entire series?",
    option1: "Pau irratati",
    option2: "Mccarteny",
    option3: "emma",
    option4: "why to hate anyone",
  },
];

const ReviewForm = () => {
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const NextQuestionHandler = () => {
    setCurrentQuestion((curr) => curr + 1);
  };
  const PrevQuestionHandler = () => {
    setCurrentQuestion((curr) => curr - 1);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2%" }}>
        <ShowQuestion Question={SampleReviewQuestions[CurrentQuestion]} />
      </div>
      
      <div style={{ width: "100%", diaplay: "flex", textAlign: "center" }}>
        {CurrentQuestion !== 0 && (
          <Fab
            sx={{
              left: "-10%",
              boxShadow: "none",
              background: Colors.purple,
              color: "white",
              "&:hover": { background: Colors.purple },
            }}
            onClick={PrevQuestionHandler}
          >
            <ArrowBack />
          </Fab>
        )}

        {CurrentQuestion !== SampleReviewQuestions.length - 1 && (
          <Fab
            sx={{
              left: "10%",
              boxShadow: "none",
              background: Colors.purple,
              color: "white",
              "&:hover": { background: Colors.purple },
            }}
            onClick={NextQuestionHandler}
          >
            <ArrowForwardIcon />
          </Fab>
        )}
      </div>
    </>
  );
};
export default ReviewForm;
