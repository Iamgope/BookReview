import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Colors } from "../UI/colors";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ background: Colors.Dark }}
      value={value}
      onChange={handleChange}
    ></BottomNavigation>
  );
}
