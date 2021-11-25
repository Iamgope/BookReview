import { Grid, Fab } from "@mui/material";
import { Fragment, useState } from "react";
import NiceBox from "../../UI/BackgroundCard";
import { Colors } from "../../UI/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddQuestions from "./AddQuestion";
import TheBox from "../TheBox";
import ShowQuestions from "../ShowQuestions";
import axiosInstance from "../../Api/AxiosApi";
import { useParams } from "react-router";


const ReviewForm = (props) => {
  const {ReviewId}=useParams();
  const QuestionList=props.QuestionList
  const rootStyle = {
    justifyContent: "center",
    color: Colors.purple,
    marginBottom: "5%",
    paddingTop: "5%",
  };
  const [BoxState, setBoxState] = useState("Add");
  const [ReviewQuestions, setReviewQuestions] = useState(QuestionList);
  const Questions = ReviewQuestions.map((Question, index) => (
    <h5
      style={{
        textAlign: "left",
        marginLeft: "5%",
        color: index === BoxState ? Colors.NotDark : Colors.purple,
      }}
      onClick={() => setBoxState(index)}
    >
      {Question.question}
    </h5>
  ));



  const onAddQuestions = (question) => {
    axiosInstance.post(`post/${ReviewId}/`,question).then(res=>console.log(res.data)).catch(err=>console.log(err))
    const UpdatedQuestions = [...ReviewQuestions, question];
    setReviewQuestions(UpdatedQuestions);
    setBoxState(ReviewQuestions.length);
  };

  return (
    <Fragment>
      <Grid container sx={rootStyle} columnSpacing="10%">
        <Grid item>
          <NiceBox sx={{ maxWidth: 300, textAlign: "center" }}>
            <img
              src={props.BookCoverImage}
              alt="bookImage"
              style={{
               maxWidth:'30vh',
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
            {BoxState === "Add" && (
              <AddQuestions onAddQuestions={onAddQuestions} />
            )}
            {BoxState !== "Add" && (
              <ShowQuestions Question={ReviewQuestions[+BoxState]} />
            )}
          </TheBox>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ReviewForm;
