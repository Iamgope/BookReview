import { Button } from "@mui/material";
import { Colors } from "../components/UI/colors";
import { useState } from "react";
import Introduction from "../components/Book/CreateBook/Introduction";
import Description from "../components/Book/CreateBook/AddDescription";
import AddImage from "../components/Book/CreateBook/AddImage";
import { useSelector } from "react-redux";
import axiosInstance from "../components/Api/AxiosApi";
import { useHistory } from "react-router";

/**Description */

const CreateBook = () => {
  const history = useHistory();
  const [stepNo, setstepNo] = useState(0);
  const [BookName, setBookName] = useState("");
  const [BookDescription, setBookDescription] = useState("");
  const [BookImage, setBookImage] = useState(null);

  const IncreaseStep = () => {
    setstepNo((prev) => prev + 1);
  };
  const DecreaseStep = () => {
    setstepNo((prev) => prev - 1);
  };
  const Author = useSelector((state) => state.auth.account);
  /// console.log(Author)
  let AuthorId;
  let AuthorName;
  if (Author) AuthorId = Author.id;
  console.log(AuthorId);
  if (Author) AuthorName = Author.username;

  const onClickSubmit = () => {
    const today = new Date();
    const TodayDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    console.log(TodayDate);
    let form_data = new FormData();
    form_data.append("title", BookName);
    form_data.append("category", 1);
    form_data.append("excerpt", BookDescription);
    //form_data.append("ClosingTime", `${BookDeadLine}T23:59:59Z`);
    form_data.append("BookCoverImage", BookImage);
    form_data.append("status", "notClosed");
    form_data.append("published", `${TodayDate}T23:59:59Z`);
    form_data.append("author", AuthorId);
    form_data.append("authorName", AuthorName);

    axiosInstance
      .post("/AddPost/", form_data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    history.push("/profile");
  };
  return (
    <div style={{ maxWidth: 950, margin: "auto", padding: "5%" }}>
      {stepNo === 0 && (
        <Introduction
          Inc={IncreaseStep}
          Dec={DecreaseStep}
          BookName={BookName}
          setBookName={setBookName}
        />
      )}
      {stepNo === 1 && (
        <Description
          Inc={IncreaseStep}
          Dec={DecreaseStep}
          BookDescription={BookDescription}
          setBookDescription={setBookDescription}
        />
      )}
      {stepNo === 2 && (
        <AddImage
          Inc={IncreaseStep}
          Dec={DecreaseStep}
          setBookImage={setBookImage}
        />
      )}

      {stepNo === 2 && (
        <Button
          variant="contained"
          sx={{
            margin: "auto",
            display: "block",
            marginTop: "2%",
            background: Colors.purple,
          }}
          onClick={onClickSubmit}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default CreateBook;
