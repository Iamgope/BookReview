import { useState } from "react";
import ShowQuestion from "./ShowQuestions";
import Pagination from "@mui/material/Pagination";

const SampleReviewQuestions = [
  {
    id: "question1",
    type: "Subjective",
    Question: "Worst thing about this book?",
  },
  {
    id: "question2",
    type: "Objective",
    Question: "Most lovable Character?",
    option1: "Jude",
    option2: "Tyler",
    option3: "Sang-Woo",
    option4: "Ruby Matthews",
  },
  {
    id: "question3",
    type: "Objective",
    Question: "Most irratating Character among them?",
    option1: "Paul",
    option2: "Mccarteny",
    option3: "emma",
    option4: null,
  },
  {
    id: "question4",
    type: "Subjective",
    Question: "what should i change in reference to storyline?",
  },
  {
    id: "question5",
    type: "Objective",
    Question: "Most irratating Character in the entire series?",
    option1: "Paul",
    option2: "Mccarteny",
    option3: "emma",
    option4: "why to hate anyone",
  },
];

const ReviewForm = () => {
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  
  return (
    <div style={{ textAlign: "center" }}>
      <ShowQuestion Question={SampleReviewQuestions[CurrentQuestion]} />
        <Pagination
          count={SampleReviewQuestions.length}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          onChange={(e,val)=>setCurrentQuestion(val-1)}
          sx={{width:'max-content',margin:'auto',marginTop:'1%'}}
        />
      
    </div>
  );
};
export default ReviewForm;
