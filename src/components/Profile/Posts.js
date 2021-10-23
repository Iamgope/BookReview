import { Card, Grid, Box } from "@mui/material";
import useSWR from "swr";
import { fetcher } from "../Api/AxiosApi";
import { Colors } from "../UI/colors";
const Posts = (props) => {
  const { data } = useSWR(`/MyPosts/`, fetcher);
  console.log("daaata", data, typeof data);
  let PostList = [];
  if (data) {
    data.map((post) => (PostList = [...PostList, post]));
    console.log("MyNooks", PostList);
  }
  if (PostList.length % 3 === 1) {
    PostList = [...PostList, null, null];
  } else if (PostList.length % 3 === 2) {
    PostList = [...PostList, null];
  }

  const PostGrid = PostList.map((Post) => (
    <Grid item>
      {Post && (
        <Card sx={{ width: "20vw", height: "20vw", marginBottom: "5%" }}>
          {Post.title}
        </Card>
      )}
      {!Post && (
        <Card
          sx={{
            width: "20vw",
            height: "20vw",
            marginBottom: "5%",
            boxShadow: "none",
            border: "2px",
          }}
        ></Card>
      )}
    </Grid>
  ));
  const Display = PostList.length ? (
    PostGrid
  ) : (
    <Box sx={{ width: "100%", height: "30vh" }}>
      <h1 style={{ color: Colors.NotDark, textAlign: "center" }}>
        No Posts Available
      </h1>
    </Box>
  );
  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ margin: "auto", justifyContent: "center", marginBottom: "20vh" }}
    >
      {Display}
    </Grid>
  );
};

export default Posts;
