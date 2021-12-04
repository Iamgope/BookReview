import { Card, Grid, Box } from "@mui/material";
import Book003 from '../../Media/Book003.png'
import { Colors } from "../UI/colors";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const MyPosts = props.MyPosts;
  let PostList = [];

  MyPosts.map((post) => (PostList = [...PostList, post]));
  //console.log("MyNooks", PostList);

  if (PostList.length % 2 === 1) {
    PostList = [...PostList, null];
  }

  const PostGrid = PostList.map((Post) => (
    <Grid item sx={{ height: "max-content" }}>
      <>
        <Card
          sx={{
            width: "28vw",

            marginBottom: "5%",
            boxShadow: "none",
            "&:hover": { boxShadow: "0.2px 0.2px 1px 1px gray" },
          }}
        >
          {Post && (
            <Link
              to={`${props.PostLink}/${
                props.PostLink === "/Review" ? Post.id : `${Post.id}-${Post.AssociatedPost}`
              }`}
            >
              <img
                src={`https://res.cloudinary.com/iamgope/${Post.BookCoverImage}`}
                alt={Post.title}
                style={{
                  width: "85%",
                  height: `26vh`,
                  marginLeft: "4%",
                  marginTop: "2%",
                  border: `0.2px solid ${Colors.NotDark}`,
                  borderRadius: "5%",
                  padding: "3%",
                }}
              />
              <h5
                style={{
                  textAlign: "center",
                  maxWidth: "90%",
                  color: Colors.NotDark,
                }}
              >
                {Post.title}
              </h5>
            </Link>
          )}
        </Card>
      </>
      {/* <h5
            style={{
              textAlign: "center",
              maxWidth: "90%",
              color: Colors.NotDark,
            }}
          >
            {Post.title}
          </h5> */}
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
