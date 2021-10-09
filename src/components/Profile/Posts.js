import { Card, Grid } from "@mui/material";
const Posts = (props) => {
  let PostList = props.Posts;
  if (PostList.length % 3 === 1) {
    PostList = [...PostList, null, null];
  } else if (PostList.length % 3 === 2) {
    PostList = [...PostList, null];
  }

  const PostGrid = PostList.map((Post) => (
    <Grid item>
      {Post && (
        <Card sx={{ width: "20vw", height: "20vw", marginBottom: "5%" }}>
          Post Number{Post}
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
  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ margin: "auto", justifyContent: "center" }}
    >
      {PostGrid}
    </Grid>
  );
};

export default Posts;
