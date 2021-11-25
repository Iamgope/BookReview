import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axiosInstance from "../Api/AxiosApi";
import { MyButton } from "../UI/Button";
import { Colors } from "../UI/colors";
export const ListItem = (props) => {
  const Condition = props.Condition;
  return (
    <li style={{ marginBottom: "0.5ch" }}>
      <Typography variant="subtitle1" sx={{ color: Colors.purple }}>
        {Condition}
      </Typography>
    </li>
  );
};

const BookRequestPage = (props) => {
  const { PostId } = useParams();
  const AgeRef = useRef();
  const SexRef = useRef();
  const [isRequested, setisRequested] = useState(null);
  const [errorText, setErrorText] = useState(null);
  useEffect(() => {
    let Data;
    const fetchPosts = async () => {
      await axiosInstance
        .get("/SubscribedPosts/")
        .then((res) => (Data = res.data))
        .catch((err) => console.log(err));
      console.log(Data);

      const isPresent = Data.find((post) => post.AssociatedPost === +PostId);

      /// const isPresent=0;
      if (isPresent) {
        setisRequested(true);
      } else {
        setisRequested(false);
      }
    };
    fetchPosts();
  }, []);

  const Account = useSelector((state) => state.auth.account);

  const OnConifrmhandler = async () => {
    if (
      !AgeRef.current.value ||
      !SexRef.current.value ||
      +AgeRef.current.value > 200 ||
      +AgeRef.current.value <= 5
    ) {
      setErrorText("Add proper Values");
      return;
    }
    // console.log("Age", AgeRef.current.value, "Sex", );
    const ReqData = {
      User: Account ? Account.id : null,
      username: Account ? Account.username : null,
      AssociatedPost: +PostId,
      BookCoverImage: props.ImageLink,
      title: props.title,
      Sex: SexRef.current.value,
      ReviewedPosts: 1,
      isAprooved: false,
      Age: AgeRef.current.value,
    };
    console.log(ReqData);

    await axiosInstance
      .post("/AddSubscription/", ReqData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    props.handleClose();
  };
  // if (+PostId === +props.AuthorId) {
  //   return (
  //     <h3
  //       style={{
  //         textAlign: "center",
  //         background: "white",
  //         padding: "5%",
  //         color:Colors.NotDark,
  //       }}
  //     >
  //       {" "}
  //       Are you Kidding me it's your Book
  //     </h3>
  //   );
  // }
  console.log(PostId);
  return (
    <>
      {errorText && (
        <h3 style={{ textAlign: "center", color: "red" }}>{errorText}</h3>
      )}
      {isRequested === true && (
        <div style={{ background: "white", padding: "5%" }}>
          <h1 style={{ textAlign: "center", color: Colors.NotDark }}>
            Already Requested! 😎
          </h1>
          <MyButton
            ButtonText="Back"
            onClick={() => props.handleClose()}
            Type="outlined"
          />
        </div>
      )}
      {isRequested === false && (
        <Fragment>
          <form
            style={{
              background: "white",
              padding: "5%",
              color: Colors.NotDark,
            }}
          >
            <InputLabel
              id="Age"
              sx={{ color: Colors.NotDark, fontWeight: 600, marginY: "2%" }}
            >
              Mention Your Age
            </InputLabel>
            <TextField
              id="Age"
              label="Age"
              type="number"
              variant="outlined"
              sx={{ width: "100%" }}
              inputRef={AgeRef}
            />
            <InputLabel
              id="SexSelector"
              sx={{ color: Colors.NotDark, fontWeight: 600, marginY: "2%" }}
            >
              Mention Your Sex
            </InputLabel>
            <Select
              labelId="SexSelector"
              label="sex"
              sx={{ width: "100%" }}
              defaultValue={`Male`}
              inputRef={SexRef}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Gay"}>gay</MenuItem>
              <MenuItem value={"Asexual"}>Asexual</MenuItem>
              <MenuItem value={"other"}>other</MenuItem>
            </Select>
          </form>

          <div style={{ display: "flex", width: "80%", margin: "auto" }}>
            <MyButton
              ButtonText="Accept"
              onClick={OnConifrmhandler}
              Type="contained"
            />
            <MyButton
              ButtonText="Cancel"
              onClick={() => props.handleClose()}
              Type="outlined"
            />
          </div>
        </Fragment>
      )}
      {isRequested === null && (
        <h3 style={{ textAlign: "center", background: "white", padding: "5%" }}>
          Loading...
        </h3>
      )}
    </>
  );
};
export default BookRequestPage;
