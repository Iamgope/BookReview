import { Fab, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import NiceBox from "../UI/BackgroundCard";
import { Colors } from "../UI/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BeginWriting = () => {
  return (
    <NiceBox sx={{ maxWidth: "75%", margin: "auto", display: "flex" }}>
      <Grid container>
        <Grid item>
          <h1 style={{ textAlign: "left", color: Colors.purple }}>
            {" "}
            Begin your Journey of writing right now
          </h1>
          <h3 style={{ color: Colors.NotDark }}>
            Write with confidence and get reviewd by everyone
          </h3>
        </Grid>
        <Grid item>
            <Link to="/Create"><Fab
            sx={{
              margin: "auto",

              background: Colors.purple,
              color: Colors.LightBlue,
              marginTop: "2vw",
              marginInline: "3vw",
              "&:hover": {
                background: Colors.purple,
              },
            }}
          >
              <ArrowBackIcon sx={{transform:"rotateY(180deg)"}}/>
          </Fab></Link>
          
        </Grid>
      </Grid>
    </NiceBox>
  );
};
export default BeginWriting;
