import ReviewFrontPage from "../components/Review/ReviewFrontPage";
import { useEffect, useState } from "react";
import axiosInstance from "../components/Api/AxiosApi";
import { useParams } from "react-router";
import { Colors } from "../components/UI/colors";
import AnalysisPage from "../components/Review/Analysis/AnalysisPage";
const MyBook = () => {
  const { ReviewId } = useParams();
  const [PostData, setPostData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [PostRequests, setPostRequests] = useState([]);
  const [PostQuestionData, setPostQuestionData] = useState([]);

  useEffect(() => {
    async function fetchPostData() {
      setisLoading(true);
      await axiosInstance
        .get(`/getSubscriptions/${ReviewId}/`)
        .then((res) => setPostRequests(res.data))
        .catch((err) => console.log(err));
      await axiosInstance
        .get(`/post/${ReviewId}/`)
        .then((res) => setPostQuestionData(res.data))
        .catch((err) => console.log(err));

      await axiosInstance
        .get(`/singlePost/${ReviewId}/`)
        .then((res) => setPostData(res.data))
        .catch((err) => console.log(err));
      setisLoading(false);
    }

    fetchPostData();
  }, [ReviewId]);
  const LoadingVal = <h3 style={{ textAlign: "center" }}>Loading....</h3>;

  return (
    <>
      {isLoading && LoadingVal}
      <>
        <h1
          style={{ color: Colors.purple, textAlign: "center", padding: "3%" }}
        >
          {" "}
          {PostData ? PostData.title : ""}
        </h1>
        {PostData ? (
          +PostData.isPublished ? (
            <>
              
             <AnalysisPage PostQuestionData={PostQuestionData}/>
            </>
          ) : (
            <ReviewFrontPage
              PostData={PostData}
              ReviewId={ReviewId}
              PostQuestionData={PostQuestionData}
              PostRequests={PostRequests}
            />
          )
        ) : (
          ""
        )}
      </>
    </>
  );
};
export default MyBook;
