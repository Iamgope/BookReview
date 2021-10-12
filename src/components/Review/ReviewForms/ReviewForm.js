import { Grid, Fab } from "@mui/material";
import { Fragment, useState } from "react";
import NiceBox from "../../UI/BackgroundCard";
import { Colors } from "../../UI/colors";
import Book3 from "../../../Media/Book003.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddQuestions from "./AddQuestion";
import TheBox from "./TheBox";
import ShowQuestions from "./ShowQuestions";
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
    option4:"Ruby Matthews"
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

  const rootStyle = {
    justifyContent: "center",
    color: Colors.purple,
    marginBottom: "5%",
    paddingTop: "5%",
    paddingRight: "5%",
  };
  const [BoxState, setBoxState] = useState("Add");
  const[ ReviewQuestions,setReviewQuestions]=useState(SampleReviewQuestions);
  const Questions = ReviewQuestions.map((Question, index) => (
    <h5
      style={{
        textAlign: "left",
        marginLeft: "5%",
        color:index===BoxState?'green':Colors.purple
      }}
      onClick={() => setBoxState(index)}
    >
      {Question.Question}
    </h5>
  ));
  const onAddQuestions=(question)=>{
    const UpdatedQuestions=[...ReviewQuestions,question];
    setReviewQuestions(UpdatedQuestions);
    setBoxState(ReviewQuestions.length)
  }
  return (
    <Fragment>
      <h1 style={{ color: Colors.purple, textAlign: "center" }}>
        {" "}
        The Mountain Tales
      </h1>

      <Grid container sx={rootStyle} columnSpacing="10%">
        <Grid item>
          <NiceBox
            sx={{ maxWidth: 300, textAlign: "center" }}
          >
            <img
              src={Book3}
              alt="bookImage"
              style={{
                maxWidth: "30vh",
                justifyContent: "center",
                padding: "3%",
                borderRadius: "10%",
              }}
            />
            <Fab
              sx={{
                display: "block",
                background: "transparent",
                color: Colors.purple,
                "&:hover": { background: "transparent" },
                margin: "auto",
                marginTop: "-10%",
                boxShadow: "none",
              }}
              onClick={() => setBoxState("Add")}
            >
              <AddCircleIcon sx={{ fontSize: "6ch" }} />
            </Fab>
            {Questions}
          </NiceBox>
        </Grid>
        <Grid item>
          <TheBox>
              {BoxState === "Add" && <AddQuestions onAddQuestions={onAddQuestions}/>}
              {BoxState!=="Add" && <ShowQuestions Question={ReviewQuestions[+BoxState]}/>}
              </TheBox>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ReviewForm;
