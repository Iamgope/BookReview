import { useState } from "react";
import { Fab } from "@mui/material";
import NiceBox from "../../UI/BackgroundCard";
import SendIcon from "@mui/icons-material/Send";
import { Colors } from "../../UI/colors";
import axiosInstance from "../../Api/AxiosApi";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
const FinishPage = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [TheFile, setTheFile] = useState(null);
  const onBookChangehandler = (e) => {
    //let form_data = new FormData();
    setTheFile(e.target.files[0]);
  };
  const onSubmitForm = async() => {
    let form_data = new FormData();
    form_data.append("PostData", TheFile);
    form_data.append("isPublished", true);

    //console.log(props.PostData);

    await axiosInstance
      .patch(`/singlePost/${+props.currentPost}/`, form_data)
      .then((res) => console.log(res.data))//then( setTimeout(window.location.reload(), 10000)
      .catch((err) => console.log(err)).then(setTimeout(window.location.reload(), 10000))
  };
  return (
    <div style={{ justifyContent: "center" }}>
      <NiceBox
        sx={{
          maxWidth: isMobile ? "70vw" : "50vw",
          textAlign: "center",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <input
          type="file"
          onChange={onBookChangehandler}
          style={{
            fontSize: isMobile ? "1.2ch" : "2ch",
            justifyContent: "center",
            maxWidth: "80%",
          }}
        />

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
          <SendIcon onClick={onSubmitForm} />
        </Fab>
      </NiceBox>
    </div>
  );
};

export default FinishPage;
