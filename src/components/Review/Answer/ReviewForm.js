import { useState, useEffect } from "react";
import ShowQuestion from "../ShowQuestions";
import { Colors } from "../../UI/colors";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Fab, Button } from "@mui/material";
import axiosInstance from "../../Api/AxiosApi";
import { useSelector } from "react-redux";

const ReviewForm = (props) => {
  const Author = useSelector((state) => state.auth.account);
  /// console.log(Author)
  let AuthorId;
  let AuthorName;
  if (Author) AuthorId = Author.id;
  if (Author) AuthorName = Author.username;
  const [Questions, setQuestions] = useState([]);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [ErrorText, setErrorText] = useState(null);

  const NextQuestionHandler = () => {
    setErrorText(null);
    setCurrentQuestion((curr) => curr + 1);
  };
  const PrevQuestionHandler = () => {
    setErrorText(null);

    setCurrentQuestion((curr) => curr - 1);
  };

  const PostId = +props.PostId;
  useEffect(() => {
    async function Fetch() {
      await axiosInstance.get(`/post/${PostId}/`).then((res) => {
        setQuestions(res.data);
      });
    }
    Fetch();
  }, []);

  const selectedAnswer = (Ans) => {
    if (Ans) {
      setErrorText(null);
    }
    setAnswer(Ans);
  };
  const onSubmitHandler = async () => {
    if (!Answer) {
      setErrorText("Please Write/select your Answer correctly");
    } else {
      const Data = {
        Response: Answer,
        User: +AuthorId,
        username: AuthorName,
        question: Questions[CurrentQuestion].id,
        type: Questions[CurrentQuestion].type,
      };
      await axiosInstance
        .post("/PostResponses/", Data)
        .then((res) => console.log(res.data))
        .catch((err) =>
          setErrorText(
            "looks like you have already responded or there i some problem (" +
              err.message +
              ")"
          )
        );
    }
  };
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "1%" }}>
        <h5 style={{ color: "red" }}>{ErrorText}</h5>
        {Questions.length && (
          <ShowQuestion
            Question={Questions[CurrentQuestion]}
            selectedAnswer={selectedAnswer}
          />
        )}
        {!Questions.length && <h1>No Questions</h1>}
      </div>

      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
          marginTop: "2%",
        }}
      >
        <Fab
          sx={{
            marginInline: "2%",
            boxShadow: "none",
            background: CurrentQuestion === 0 ? "" : Colors.purple,
            color: "white",
            "&:hover": {
              background: CurrentQuestion === 0 ? "gray" : Colors.purple,
            },
          }}
          onClick={
            CurrentQuestion === 0 ? () => console.log("") : PrevQuestionHandler
          }
        >
          <ArrowBack />
        </Fab>
        <Button
          variant="contained"
          sx={{ marginInline: "2%" }}
          onClick={onSubmitHandler}
        >
          Submit
        </Button>
        <Fab
          sx={{
            marginInline: "2%",
            boxShadow: "none",
            background:
              CurrentQuestion === Questions.length - 1 ? "" : Colors.purple,
            color: "white",
            "&:hover": {
              background:
                CurrentQuestion === Questions.length - 1
                  ? "gray"
                  : Colors.purple,
            },
          }}
          onClick={
            CurrentQuestion === Questions.length - 1
              ? () => console.log("")
              : NextQuestionHandler
          }
        >
          <ArrowForwardIcon />
        </Fab>
      </div>
    </>
  );
};
export default ReviewForm;
