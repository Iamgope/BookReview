import { Fragment } from "react";
import { Typography } from "@mui/material";

export const HeadLine1 = (props) => {
  return (
    <Fragment>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
          {props.children}
      </Typography>
    </Fragment>
  );
};
