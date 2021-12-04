import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NiceBox from "../components/UI/BackgroundCard";
import axiosInstance from "../components/Api/AxiosApi";
import { Colors } from "../components/UI/colors";
import { Button, Grid, useMediaQuery, Card } from "@mui/material";
import { useTheme } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import SelectionPaper from "../components/UI/selectionPaper";
import ReviewForm from "../components/Review/Answer/ReviewForm";
import { CssTextAreaField } from "../components/UI/FormInput";
import { useRef } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export const FinalReview = (props) => {
  const Author = useSelector((state) => state.auth.account);
  const SubscriptionId = props.SubscriptionId;
  /// console.log(Author)
  let AuthorId;
  let AuthorName;
  if (Author) AuthorId = Author.id;
  if (Author) AuthorName = Author.username;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const TextRef = useRef("");
  const [selectedText, setSelectedText] = useState("");
  const onChangeText = () => {
    setSelectedText(TextRef.current.value);
  };
  const onSubmitHandler = async () => {
    const Data = {
      Response: selectedText,
      User: AuthorId,
      username: AuthorName,
      isLiked: false,
      AssociatedPost: props.AssociatedPost,
    };
    await axiosInstance
      .post("/FinalResponse/", Data)
      .then((res) => console.log(res.data))
      .then(
        axiosInstance
          .patch(`/singleSubscription/${SubscriptionId}/`, { reviewed: true })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err.message))
      );
  };
  return (
    <>
      <h3 style={{ color: Colors.purple }}>
        Please give final wholesome review of the entire Book?
      </h3>
      <CssTextAreaField
        multiline="True"
        aria-label="minimum height"
        minRows="7"
        ref={TextRef}
        onChange={onChangeText}
        placeholder="Final Wholesome Review ..."
        style={{
          width: isMobile ? "75vw" : "40vw",
          height: "50vh",
          overflowY: "scroll",
          background: "white",
        }}
      />
      <Button
        variant="contained"
        sx={{
          display: "block",
          margin: "auto",
          marginTop: "2%",
          background: Colors.purple,
        }}
        onClick={onSubmitHandler}
      >
        Submit
      </Button>
    </>
  );
};
const ForReviewPage = () => {
  const { ReviewPostId } = useParams();
  const myArray = ReviewPostId.split("-");
  const [isLoading, setisLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currPage, setCurrPage] = useState("A");
  const PostId = +myArray[1];
  const SubscriptionId = +myArray[0];
  //console.log(PostId,SubscriptionId)
  //const { data } = useSWR(`singlePost/${ReviewPostId}/`, fetcher);
  const [SubscriptionData, setSubscriptionData] = useState(null);
  const [PostData, setPostData] = useState(null);
  const [isThereError, setisThereError] = useState(0);
  const [MySubscribedPosts, setMySubscribedPosts] = useState([]);

  useEffect(() => {
    async function Fetcher() {
      setisLoading(true);
      await axiosInstance
        .get("/Aprooved_subscribtions/")
        .then((res) => {
          setMySubscribedPosts(res.data);
        })
        .then(
          axiosInstance
            .get(`/singlePost/${PostId}/`)
            .then((res) => setPostData(res.data))
            .catch((err) => setisThereError(1))
        )
        .then(
          axiosInstance
            .get(`/singleSubscription/${SubscriptionId}/`)
            .then((res) => setSubscriptionData(res.data))
        )
        .catch((err) => setisThereError(1));
      setisLoading(false);
      //console.log(, "helllw");
    }

    Fetcher();
  }, [PostId, SubscriptionId]);

  let PostImage, PostTitle, isPublished, PDFlink;
  if (PostData) {
    PostImage = PostData.BookCoverImage;
    PostTitle = PostData.title;
    isPublished = PostData.isPublished;
    PDFlink = PostData.PostData;
  }
  if (isLoading) {
    return (
      <h3
        style={{ textAlign: "center", marginBottom: "40vh", marginTop: "40vh" }}
      >
        <CircularProgress />
      </h3>
    );
  }
  if (isThereError) {
    return (
      <h3
        style={{ textAlign: "center", marginBottom: "40vh", marginTop: "40vh" }}
      >
        Please check your url or internet connection,or maybe there is something
        wrong in the server
      </h3>
    );
  }
  if (MySubscribedPosts) {
    if (!MySubscribedPosts.find((post) => post.id === SubscriptionId)) {
      return (
        <h3
          style={{
            textAlign: "center",
            marginBottom: "40vh",
            marginTop: "40vh",
          }}
        >
          Request Not Aprooved or check if you are logged in
        </h3>
      );
    }
    // else if((MySubscribedPosts.find((post) => post.id === SubscriptionId))&&!(MySubscribedPosts.find((post) => post.id === SubscriptionId)).isAprooved){
    //  return <h3>Sorry You were not aprooved</h3>
    // }
  }
  if (SubscriptionData && SubscriptionData.reviewed) {
    console.log(SubscriptionData);
    return (
      <h3
        style={{ textAlign: "center", marginBottom: "40vh", marginTop: "40vh" }}
      >
        You have already responded
      </h3>
    );
  }

  return (
    <>
      <img
        src={PostImage}
        alt={PostTitle}
        style={{ width: "100%", height: "30vh", margin: "0%" }}
      />

      <h1
        style={{
          color: Colors.Dark,
          textAlign: "center",
          fontSize: isMobile ? "2rem" : "3rem",
          maxWidth: "90%",
          margin: "auto",
          marginTop: "1%",
        }}
      >
        {PostTitle}{" "}
      </h1>
      {isPublished && (
        <Grid
          container
          spacing={isMobile ? 0 : 5}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            
          }}
        >
          <Grid item sx={{ marginTop: "3%" }}>
            <SelectionPaper currPage={currPage === "A"}>
              <h4 onClick={() => setCurrPage("A")}>View Book for Review</h4>
            </SelectionPaper>
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <SelectionPaper currPage={currPage === "B"}>
              <h4 onClick={() => setCurrPage("B")}>View Review Questions</h4>
            </SelectionPaper>
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <SelectionPaper currPage={currPage === "C"}>
              <h4 onClick={() => setCurrPage("C")}>Final Review and Submit </h4>
            </SelectionPaper>
          </Grid>
        </Grid>
      )}
      <NiceBox
        sx={{
          maxWidth: isMobile ? "95%" : "70%",
          margin: "auto",
          textAlign: "center",
          marginTop: "3%",
          marginBottom: "30vh",
        }}
      >
        {isPublished ? (
          currPage === "A" ? (
            <>
              <h2 style={{ color: Colors.NotDark }}>
                Please read this book and do not forget to review this.
              </h2>

              <a href={PDFlink} attributes-list download="optional-value">
                {" "}
                <Button
                  endIcon={<DownloadIcon />}
                  variant="contained"
                  sx={{ background: Colors.purple }}
                >
                  View Book
                </Button>{" "}
              </a>
            </>
          ) : currPage === "B" ? (
            <Card
              sx={{
                borderRadius: "3ch",
                maxWidth: isMobile ? "150%" : "90%",
                margin: "auto",
              }}
            >
              <ReviewForm PostId={+PostId} />
            </Card>
          ) : (
            <>
              <FinalReview
                SubscriptionId={SubscriptionId}
                AssociatedPost={+PostId}
              />
            </>
          )
        ) : (
          <h2 style={{ color: Colors.NotDark }}>Yet To Be Posted</h2>
        )}
      </NiceBox>
    </>
  );
};
export default ForReviewPage;
