import { useState } from "react";
// import { Box } from "@mui/system";
// import Add from "../../Media/Add.svg";
// import view from "../../Media/view.svg";
// import finish from "../../Media/finish.svg";
import { Paper, Grid } from "@mui/material";
import { Colors } from "../components/UI/colors";
import ReviewForm from "../components/Review/CreateReviewPage";
import FinishPage from "../components/Review/Finish";
import DataTable from "../components/Review/Requests";
const ReviewFrontPage = () => {
  const [currPage, setCurrpage] = useState("A");
  let CurrentDisplay;
  if (currPage === "A") {
    CurrentDisplay = <DataTable />;
  } else if (currPage === "B") {
    CurrentDisplay = <ReviewForm />;
  } else if (currPage === "C") {
    CurrentDisplay = <FinishPage />;
  }
  return (
    <>
      <h1 style={{ color: Colors.purple, textAlign: "center" }}>
        {" "}
        The Mountain Tales
      </h1>
      <Grid container sx={{ marginTop: "2%", justifyContent: "center" }}>
        <Grid item sx={{ marginInline: "1%" }}>
          <Paper
            sx={{
              height: "10vh",
              padding: "3%",
              textAlign: "center",
              border: `2px solid ${currPage === "A" ? Colors.purple : "white"}`,
            }}
            onClick={() => setCurrpage("A")}
          >
            <h3 style={{ fontSize: "2vh" }}>View Requests</h3>
          </Paper>
        </Grid>
        <Grid item sx={{ marginInline: "1%" }}>
          <Paper
            sx={{
              height: "10vh",
              padding: "3%",
              textAlign: "center",
              border: `2px solid ${currPage === "B" ? Colors.purple : "white"}`,
            }}
            onClick={() => setCurrpage("B")}
          >
            <h3 style={{ fontSize: "2vh" }}>Add Questions</h3>
          </Paper>
        </Grid>
        <Grid item sx={{ marginInline: "1%" }}>
          <Paper
            sx={{
              height: "10vh",
              padding: "3%",
              textAlign: "center",
              border: `2px solid ${currPage === "C" ? Colors.purple : "white"}`,
            }}
            onClick={() => setCurrpage("C")}
          >
            <h3 style={{ fontSize: "2vh" }}>{`Upload & Finish`}</h3>
          </Paper>
        </Grid>
      </Grid>
      {CurrentDisplay}
    </>
  );
};

export default ReviewFrontPage;
