import { Fab, Modal } from "@mui/material";
import { Box } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Colors } from "./colors";
const ModalUI = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      sx={{ maxWidth: 600, margin: "auto", marginTop: "3%" }}
    >
      <Box
        sx={{ background: Colors.LightBlue, padding: "5%", borderRadius: "2%" }}
      >
        <Fab
          sx={{
            marginLeft: "90%",
            marginTop: "-5%",
            boxShadow: "none",
            background: Colors.LightBlue,
            "&:hover": { background: "initial" },
            color: Colors.purple,
          }}
          onClick={props.handleClose}
        >
          <HighlightOffIcon />
        </Fab>
        <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 210px)" }}>
          {" "}
          {props.children}
        </div>
      </Box>
    </Modal>
  );
};
export default ModalUI;
