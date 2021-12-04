import { Card, useMediaQuery, Fab } from "@mui/material";
import { useTheme } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import axiosInstance from "../../Api/AxiosApi";
import { Colors } from "../../UI/colors";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NextButton, PrevButton } from "../../UI/NextPrev";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleQuestionAnalysis from "./SingleQuestionAnalysis";

const useStyles = makeStyles((theme) => ({
  Card: {
    maxWidth: "80%",
    margin: "auto",
  },
}));
const AnalysisPage = (props) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [Reviews, setReviews] = useState([]);
  const [CurrReviewIndex, setCurrReviewIndex] = useState(0);
  const onIncreaseIndex = () => {
    setCurrReviewIndex((curr) => (curr + 1) % Reviews.length);
  };
  const onDecreaseIndex = () => {
    setCurrReviewIndex((curr) => (curr - 1 + Reviews.length) % Reviews.length);
  };
  const PostId = props.ReviewId;
  useEffect(() => {
    async function Fetch() {
      setIsLoading(true);
      await axiosInstance
        .get(`/FinalResponse/${PostId}/`)
        .then((res) => setReviews(res.data));

      setIsLoading(false);
    }
    Fetch();
  }, [PostId]);
  const PostQuestionData = props.PostQuestionData;
  console.log(PostQuestionData);

  const onLike = () => {};
  const OnDislike = () => {};
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const QuestionList = PostQuestionData.map((question, index) => (
    <Accordion
      expanded={expanded === `panel${index + 1}`}
      onChange={handleChange(`panel${index + 1}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}bh-content`}
        id={`panel${index + 1}bh-header`}
      >
        <Typography sx={{ color: "text.primary" }}>
          {question.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <SingleQuestionAnalysis question={question}/>
      </AccordionDetails>
    </Accordion>
    
  ));

  const Classes = useStyles();
  return (
    <>
      <h2 style={{ color: Colors.NotDark, textAlign: "center" }}>
        Final Responses
      </h2>
      <Card
        sx={{
          maxWidth: isMobile ? "80vw" : "50vw",
          margin: "auto",
          padding: "2%",
          border: `1px solid ${Colors.NotDark}`,
          borderRadius: "3ch",
        }}
      >
        {isLoading && (
          <h3 style={{ textAlign: "center", margin: "auto" }}>Loading...</h3>
        )}
        {!isLoading &&
          (!Reviews.length ? (
            <h2 style={{ textAlign: "center" }}>No Reviews Found</h2>
          ) : (
            <>
              <h5 style={{ textAlign: "right", marginBottom: "-2%" }}>
                Review By
              </h5>
              <h5 style={{ color: Colors.NotDark, textAlign: "right" }}>
                {Reviews[+CurrReviewIndex].username}
              </h5>
              <h3
                style={{
                  textAlign: "left",
                  margin: "auto",
                  maxWidth: "80%",
                  marginBottom: "5%",
                  color: Colors.Dark,
                }}
              >
                {Reviews[+CurrReviewIndex].Response}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "3%",
                  marginBottom: "3%",
                }}
              >
                <PrevButton onClick={onIncreaseIndex} />
                <NextButton onClick={onDecreaseIndex} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  //  marginBottom: isMobile ? "-1%" : "-7%",
                }}
              >
                <Fab
                  sx={{ marginInline: "1%" }}
                  size={isMobile ? "small" : "medium"}
                  onclick={onLike}
                >
                  <ThumbUpAltIcon
                    sx={{
                      color:
                        Reviews[+CurrReviewIndex].isLiked === 1
                          ? Colors.NotDark
                          : "",
                    }}
                  />
                </Fab>
                <Fab
                  sx={{ marginInline: "1%" }}
                  size={isMobile ? "small" : "medium"}
                  onClick={OnDislike}
                >
                  <ThumbDownIcon
                    sx={{
                      color:
                        Reviews[+CurrReviewIndex].isLiked === -1
                          ? Colors.NotDark
                          : "",
                    }}
                  />
                </Fab>
              </div>
            </>
          ))}
      </Card>

      <h2 style={{ color: Colors.NotDark, textAlign: "center" }}>
        Question Responses
      </h2>

      <div className={Classes.Card}>{QuestionList}</div>
    </>
  );
};
export default AnalysisPage;
