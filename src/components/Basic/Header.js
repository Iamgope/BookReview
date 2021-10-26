import {
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../UI/colors";
import { makeStyles } from "@mui/styles";
import NiceBox from "../UI/BackgroundCard";
import { NextButton } from "../UI/NextPrev";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "8%",
    paddingTop: "5%",
    justifyContent: "center",

    // backgroundColor:Colors.Dark,
    margin: "auto",
    // padding: "5%",
  },
  heading: {
    color: Colors.Dark,
    fontSize: "4.5rem",
    textAlign: "left",
    "@media (max-width:800px)": {
      fontSize: "3rem",
      textAlign: "center",
    },
    "@media (max-width:600px)": {
      fontSize: "2.5rem",
      textAlign: "center",
    },
    fontWeight: 750,
    letterSpacing: "-3px",
    ///padding:'5%'
  },
  Input: {
    border: `2px solid ${Colors.purple}`,
    borderRadius: "5ch",
    padding: "1.5%",
    width: "60%",
    fontSize: "0.6ch",
    fontWeight: 600,
    marginTop:'2%'
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const Classes = useStyles();
  return (
    <div
      className={Classes.root}
      style={{ display: isMobile ? "block" : "flex" }}
    >
      <>
        <span className={Classes.heading}>
          <span>We have something to</span>
          <br />

          <span style={{ color: Colors.NotDark }}>Spice Up </span>
          <span>your writing life </span>
          <div style={{ display: "flex" }}>
            <input type="text" className={Classes.Input} />
           <div style={{marginInline:'2%'}}>
            <NextButton/>
            </div>
          </div>
        </span>
      </>
      <NiceBox
        sx={{
          maxWidth: isMobile ? "80vw" : "45vw",
          //paddingle:'5%'
        }}
      ></NiceBox>
    </div>
  );
};
export default Header;
