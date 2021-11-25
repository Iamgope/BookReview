import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import axiosInstance from "../Api/AxiosApi";
import { Colors } from "../UI/colors";
import Posts from "./Posts";
const TogglePosts = () => {
  const [MyPosts, setMyPosts] = useState([]);
  const [MySubscribedPosts, setMySubscribedPosts] = useState([]);
  useEffect(() => {
    const fetchMyPosts = async () => {
      axiosInstance
        .get("/MyPosts/")
        .then((res) => setMyPosts(res.data))
        .catch((err) => console.log(err));
      axiosInstance
        .get("SubscribedPosts/")
        .then((res) => setMySubscribedPosts(res.data))
        .catch((err) => console.log(err));
    };
    fetchMyPosts();
  }, []);
  const [isCurrentBook, setisCurrentBook] = useState(true);

  const NormalCss = {
    width: "40%",

    "&:hover": { background: Colors.purple, color: "white" },
  };
  const ActiveCss = {
    background: Colors.LightBlue,
    border: `3px solid ${Colors.purple}`,
    color: Colors.purple,
  };

  ///console.log(MySubscribedPosts);

  return (
    <Box
      sx={{
        margin: "auto",
        justifyContent: "center",
        background: "white",
        padding: "5%",
        borderRadius: "2ch",
        width: "80%",
      }}
    >
      <ToggleButtonGroup
        sx={{
          width: "100%",
          margin: "auto",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <ToggleButton
          sx={
            isCurrentBook
              ? {
                  ...ActiveCss,
                  ...NormalCss,
                  borderRight: `4px solid ${Colors.purple}`,
                }
              : { ...NormalCss, borderRight: `4px solid ${Colors.purple}` }
          }
          onClick={() => setisCurrentBook(true)}
        >
          <span style={{ fontWeight: "bolder", fontSize: "2ch" }}>
            {" "}
            My Books
          </span>
        </ToggleButton>
        <ToggleButton
          sx={
            !isCurrentBook
              ? {
                  ...ActiveCss,
                  ...NormalCss,
                }
              : { ...NormalCss }
          }
          onClick={() => setisCurrentBook(false)}
        >
          <span style={{ fontWeight: "bolder", fontSize: "2ch" }}>
            {" "}
            Reviewed Books
          </span>
        </ToggleButton>
      </ToggleButtonGroup>
      {isCurrentBook && <Posts MyPosts={MyPosts} PostLink={"/Review"} />}
      {!isCurrentBook && (
        <Posts MyPosts={MySubscribedPosts} PostLink={"/ReviewPost"} />
      )}
    </Box>
  );
};

export default TogglePosts;
