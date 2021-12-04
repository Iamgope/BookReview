import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const HeadLine1 = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
   
      <Typography   sx={{ textAlign: "center" ,fontSize:isMobile?'2rem':'3rem',fontWeight:600 }}>
        {props.children}
      </Typography>
  );
};
