import { Fragment, useEffect, useState } from "react";
import ProfileDetails from "../components/Profile/ProfileDetails";
import TogglePosts from "../components/Profile/TogglePosts";
import axiosInstance from "../components/Api/AxiosApi";
const Dashboard = (props) => {
  // const Userdata =props.AccountDetails;//AccountDetails
  //  console.log(Userdata)
  const [IsLoading, setIsLoading] = useState(false);
  const [MyPosts, setMyPosts] = useState([]);
  const [MyReviewedPosts, setMyReviewedPosts] = useState([]);
  const [MySubscribedPosts, setMySubscribedPosts] = useState([]);
  const [Userdata, setUserdata] = useState(null);
  useEffect(() => {
    const fetchMyPosts = async () => {
      setIsLoading(true);
      await axiosInstance
        .get("/auth/user/")
        .then((res) =>{ setUserdata(res.data);props.setAccountDetails(res.data);});
      await axiosInstance
        .get("/MyPosts/")
        .then((res) => {
          setMyPosts(res.data);
          
        })
        .catch((err) => console.log(err));
      await axiosInstance
        .get("SubscribedPosts/")
        .then((res) => setMySubscribedPosts(res.data))
        .catch((err) => console.log(err));
      await axiosInstance
        .get("MyFinalResponses/")
        .then((res) => setMyReviewedPosts(res.data));
      setIsLoading(false);
    };
    fetchMyPosts();
  }, []);
  if (IsLoading) {
    return (
      <h2
        style={{ textAlign: "center", marginBottom: "40vh", marginTop: "40vh" }}
      >
        Loading...
      </h2>
    );
  }
  return (
    <Fragment>
      <ProfileDetails
        userName={Userdata ? Userdata.username : ""}
        MyPosts={MyPosts.length}
        MyReviewedPosts={MyReviewedPosts.length}
        MySubscribedPosts={MySubscribedPosts.length - MyReviewedPosts.length}
      />
      <TogglePosts
        userId={Userdata ? Userdata.id : ""}
        MyPosts={MyPosts}
        MySubscribedPosts={MySubscribedPosts}
        MyReviewedPosts={MyReviewedPosts}
      />
    </Fragment>
  );
};
export default Dashboard;
