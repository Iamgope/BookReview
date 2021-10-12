import { ToggleButton } from "@mui/material";
import { Colors } from "./colors";
const NiceOption = (props) => {
  const value = props.value;

  return (
    <ToggleButton
      onClick={props.onClick}
      sx={{
        width: 280,
        margin: "3%",
        border: `1px solid ${Colors.purple}`,
        fontSize: "1rem",
        color: Colors.purple,
        background: Colors.LightBlue,
        fontWeight: 600,
      }}
    >
      {value}
    </ToggleButton>
  );
};
export default NiceOption;
