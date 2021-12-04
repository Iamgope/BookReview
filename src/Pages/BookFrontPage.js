import { Button, Grid, Typography } from "@mui/material";
import { Colors } from "../components/UI/colors";
import { Fragment, useState } from "react";
import NiceBox from "../components/UI/BackgroundCard";
import { MyButton } from "../components/UI/Button";
import BookRequestPage from "../components/Book/BookRequest";
import ModalUI from "../components/UI/Modal";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../components/Api/AxiosApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Book003 from '../Media/Book003.png'
/* All The Styles Listed Here*/

const rootStyle = {
  justifyContent: "center",
  color: Colors.purple,
  padding: "5%",
  paddingTop: "5%",
};

const ImgStyle = {
  width: "90%",
  height: 450,
  marginTop: "3%",
  marginBottom: "2%",
};

const DescriptionStyle = {
  maxWidth: 450,
};

/* Main Component The FrontPage of The Book */
const BookFrontPage = (props) => {
  const Account = useSelector((state) => state.auth.account);
  const UserId = Account ? Account.id : "";
  
  console.log("userid: ", UserId);
  const [open, setOpen] = useState(false);

  const { PostId } = useParams();
  const { data } = useSWR(`singlePost/${PostId}/`, fetcher);
  let Author;
  if (data) {
    
    Author = data.author;
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Grid container columnSpacing={5} sx={rootStyle}>
        <Grid item>
          <ImageView
            Image={data?`https://res.cloudinary.com/iamgope/${data.BookCoverImage}`:Book003}
          />

          {Author === UserId ? (
            <Link to={`/Review/${PostId}`}>
              <MyButton Type="outlined" ButtonText="see Book" />
            </Link>
          ) : (
            <MyButton
              Type="outlined"
              onClick={() => setOpen(true)}
              ButtonText="Request Book"
            />
          )}
        </Grid>

        <Grid item>
          <BookDescription
            Title={data ? data.title : ""}
            Description={data ? data.excerpt : ""}
            Author={data ? data.authorName : ""}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
      <ModalUI open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <BookRequestPage
          handleClose={handleClose}
          title={data ? data.title : ""}
          ImageLink={data ? data.BookCoverImage : props.Book.BookCoverImage}
          AuthorId={data ? data.id : ""}
        />
      </ModalUI>
    </Fragment>
  );
};
export default BookFrontPage;

/*Image For the View */
export const ImageView = (props) => {
  return <img src={props.Image} alt="Book_Image" style={ImgStyle} />;
};

/*Image Ends */

/*Description */

export const BookDescription = (props) => {
  const [ReadMore, setReadMore] = useState(false);
  return (
    <>
      <div style={DescriptionStyle}>
        <Typography variant="h4" sx={{ fontWeight: 900 }} gutterBottom>
          {props.Title}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
          Book By ({props.Author})
        </Typography>

        <Typography
          variant="subtitle1"
          paragraph
          sx={{ maxHeight: ReadMore ? "fit-content" : 360, overflow: "hidden" }}
          gutterBottom
        >
          {props.Description}
        </Typography>
        <Button onClick={() => setReadMore((prev) => !prev)}>
          {!ReadMore ? "Read More >>" : "Read Less <<"}
        </Button>
      </div>
    </>
  );
};
/*Description Ends */

/*InFo About Book */
export const InfoListItem = (props) => {
  const a = props.a;
  const b = props.b;
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 600, margin: "2%" }}>
        {a}
      </Typography>
      <Typography variant="subtitle1">{b}</Typography>
    </>
  );
};
export const Info = (props) => {
  return (
    <>
      <NiceBox>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "30%",
            borderBottom: `solid 5px ${Colors.purple}`,
            paddingBottom: "10%",
          }}
        >{`₹${props.price}`}</Typography>

        <InfoListItem a="Author" b={props.Author} />
        <InfoListItem a="ISBN Number" b={props.ISBN_NO} />
        <InfoListItem a="Pages" b={props.Pages} />
      </NiceBox>
    </>
  );
};

/*Info ends */

/* Request for the review of the book */

export const ReviewOption = () => {};
