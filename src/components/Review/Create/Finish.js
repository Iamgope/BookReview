//import { useState } from "react";
import { Fab } from "@mui/material";
import NiceBox from "../../UI/BackgroundCard";
import SendIcon from "@mui/icons-material/Send";
import { Colors } from "../../UI/colors";
const FinishPage = () => {
  //const [isThereFile, setIsThereFile] = useState(false);
  return (
    <NiceBox
      sx={{ height: "40vh", margin: "auto", marginTop: "5%" ,maxWidth:'max-content'}}
    >
      <input type="file" onChange={(e) => console.log(e.target.value)} style={{fontSize:'2ch'}}/>

      <Fab
        color="primary"
        component="span"
        aria-label="add"
        sx={{
          display: "flex",
          margin: "auto",
          marginTop: "10%",
          background: Colors.purple,
        }}
      >
        <SendIcon />
      </Fab>
    </NiceBox>
  );
};

export default FinishPage;
