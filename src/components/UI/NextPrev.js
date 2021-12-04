import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Colors } from "./colors";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const NextButton = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fab
      size={isMobile ? "small" : "medium"}
      sx={{
        background: Colors.purple,
        "&:hover": { background: Colors.LightBlue },
        marginInline:'1%'
      }}
      onClick={props.onClick}
    >
      <ArrowBackIcon
        sx={{
          color: "white",
          fontSize: isMobile ? "3ch" : "5ch",
          transform: "rotateY(180deg)",
          marginInline:'1%'
        }}
      />
    </Fab>
  );
};

export const PrevButton = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fab
      size={isMobile ? "small" : "medium"}
      sx={{
        background: Colors.purple,
        "&:hover": { background: Colors.LightBlue },
      }}
      onClick={props.onClick}
    >
      <ArrowBackIcon
        sx={{
          color: "white",
          fontSize: isMobile ? "3ch" : "5ch",
        }}
      />
    </Fab>
  );
};
