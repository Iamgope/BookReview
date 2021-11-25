import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NiceBox from "../components/UI/BackgroundCard";
import axiosInstance from "../components/Api/AxiosApi";
import { Colors } from "../components/UI/colors";
import { Button, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import SelectionPaper from "../components/UI/selectionPaper";

const ForReviewPage = () => {
  const { ReviewPostId } = useParams();
  const myArray = ReviewPostId.split("-");

  const PostId = +myArray[1];
  const SubscriptionId = +myArray[0];
  //console.log(PostId,SubscriptionId)
  //const { data } = useSWR(`singlePost/${ReviewPostId}/`, fetcher);
  const [SubscriptionData, setSubscriptionData] = useState(null);
  const [PostData, setPostData] = useState(null);
  const [isThereError, setisThereError] = useState(0);
  const [MySubscribedPosts, setMySubscribedPosts] = useState([]);
  //  const { data } = useSWR(`singlePost/${PostId}/`, fetcher);

  useEffect(() => {

   

    async function Fetcher() {
      await axiosInstance
        .get("/SubscribedPosts/")
        .then((res) => {setMySubscribedPosts(res.data)})
        .catch((err) => setisThereError(true));

      await axiosInstance
        .get(`/singlePost/${PostId}/`)
        .then((res) => setPostData(res.data))
        .catch((err) =>setisThereError(1));
      await axiosInstance
        .get(`singleSubscription/${SubscriptionId}/`)
        .then((res) => setSubscriptionData(res.data)).catch(err=>setisThereError(1));

        //console.log(, "helllw");
      }
    
    Fetcher();
  }, []);

  let PostImage, PostTitle, isPublished, PDFlink;
  if (PostData) {
    PostImage = PostData.BookCoverImage;
    PostTitle = PostData.title;
    isPublished = PostData.isPublished;
    PDFlink = PostData.PostData;
  }
 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currPage, setCurrPage] = useState("A");
  if (isThereError) {
    return <h1 style={{textAlign:'center'}}>Some error has happended</h1>
  }
  if(MySubscribedPosts){
    if(!MySubscribedPosts.find(post=>post.id===SubscriptionId)){
      return <h1 style={{textAlign:'center'}}>UnAuthorized Page for you !</h1>
    }
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
            margin: "auto",
          }}
        >
          <Grid item>
            <SelectionPaper currPage={currPage === "A"}>
              <h3 onClick={() => setCurrPage("A")}>View Book for Review</h3>
            </SelectionPaper>
          </Grid>
          <Grid item>
            <SelectionPaper currPage={currPage === "B"}>
              <h3 onClick={() => setCurrPage("B")}>View Review Questions</h3>
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
          ) : (
            ""
          )
        ) : (
          <h2 style={{ color: Colors.NotDark }}>Yet To Be Posted</h2>
        )}
      </NiceBox>
    </>
  );
};
export default ForReviewPage;
