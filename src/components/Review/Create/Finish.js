import { useState } from "react";
import { Fab } from "@mui/material";
import NiceBox from "../../UI/BackgroundCard";
import SendIcon from "@mui/icons-material/Send";
import { Colors } from "../../UI/colors";
import axiosInstance from "../../Api/AxiosApi";
const FinishPage = (props) => {
  const [TheFile, setTheFile] = useState(null);
  const onBookChangehandler = (e) => {
    //let form_data = new FormData();
    setTheFile(e.target.files[0]);
  };
  const onSubmitForm = () => {
    let form_data = new FormData();
    form_data.append("PostData", TheFile);
    // form_data.append("category", 1);
    // form_data.append("title", props.PostData.title);
    // form_data.append("BookCoverImage", props.PostData.BookCoverImage);
    // form_data.append("status", "Closed");
    // form_data.append("published", props.PostData.published);
    // form_data.append("author", props.PostData.author);
    // form_data.append("authorName", props.PostData.authorName);
    // form_data.append("excerpt", props.PostData.excerpt);
    form_data.append("isPublished", true);

    console.log(props.PostData);

    axiosInstance
      .patch(`/singlePost/${+props.currentPost}/`, form_data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <NiceBox
      sx={{
        height: "40vh",
        margin: "auto",
        marginTop: "5%",
        maxWidth: "max-content",
      }}
    >
      <input
        type="file"
        onChange={onBookChangehandler}
        style={{ fontSize: "2ch" }}
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
  );
};

export default FinishPage;
