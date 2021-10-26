import { Box } from "@mui/material";
import { Colors } from "./colors";
const NiceBox = (props) => {
  return (
    <Box
      sx={{
        ...props.sx,
        background: Colors.LightBlue,
        borderRadius: "2ch",
        width: "150%",
        paddingInline: 0,
      }}
    >
      <div style={{ padding: "5%" }}>{props.children}</div>
    </Box>
  );
};
export default NiceBox;
