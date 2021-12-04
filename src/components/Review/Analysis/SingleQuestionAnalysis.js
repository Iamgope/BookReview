import { Card,} from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../Api/AxiosApi";
import { NextButton, PrevButton } from "../../UI/NextPrev";

let OptionAnswers = {},
  OptionalValues = [];
const OptionGenerator = async (Answers) => {
  let occurrences = [];
  Answers.map((Answer) => occurrences.push(Answer.Response));

  OptionAnswers = await occurrences.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  OptionalValues = Object.keys(OptionAnswers);
};
export const OptionalResponse = (props) => {
  const Answers = props.Answers;
  OptionGenerator(Answers);
  console.log(OptionAnswers["Jerry"]);

  const Values = OptionalValues.map((Value) => (
    <h4>{`${Value} :${OptionAnswers[Value]}`}</h4>
  ));

  return <>{Values}</>;
};

const SingleQuestionAnalysis = (props) => {
  const Question = props.question;
  const [Answers, setAnswers] = useState([]);
  const [currentAnswerIndex, setAnswerIndex] = useState(0);
  useEffect(() => {
    const Fetcher = async () => {
      await axiosInstance
        .get(`/PostResponses/${Question.id}/`)
        .then((res) => setAnswers(res.data));
    };
    Fetcher();
  }, [Question]);

  const OnNextHandler = () => {
    setAnswerIndex((curr) => (curr + 1) % Answers.length);
  };
  const onPrevHandler = () => {
    setAnswerIndex((curr) => (curr - 1 + Answers.length) % Answers.length);
  };
  return (
    <>
      {Question.type === "subjective" && (
        <>
          {Answers.length ? (
            <>
              <Card sx={{ padding: "3%" }}>
                <h6 style={{ marginTop: "-3%", marginBottom: "-1%" }}>
                  Review By.
                </h6>
                <h5 style={{ color: "gray" }}>
                  {Answers[currentAnswerIndex].username}
                </h5>
                <h5>{Answers[currentAnswerIndex].Response}</h5>
                <PrevButton onClick={OnNextHandler} />
                <NextButton onClick={onPrevHandler} />
              </Card>
            </>
          ) : (
            <h3>No Responses Till Now</h3>
          )}
        </>
      )}

      {Question.type === "objective" && (
        <>
          <OptionalResponse Answers={Answers} />
        </>
      )}
    </>
  );
};
export default SingleQuestionAnalysis;
