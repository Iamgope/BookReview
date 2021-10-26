import { Typography } from "@mui/material";

export const HeadLine1 = (props) => {
  return (
   
      <Typography   sx={{ textAlign: "center" ,fontSize:'3rem',fontWeight:600 }}>
        {props.children}
      </Typography>
  );
};
