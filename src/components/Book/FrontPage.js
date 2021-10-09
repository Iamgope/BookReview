import { Button, Grid, Typography } from "@mui/material";
import { Colors } from "../UI/colors";
import { Fragment, useState } from "react";
import NiceBox from "../UI/BackgroundCard";
import { MyButton } from "../UI/Button";
import BookRequestPage from "./BookRequest";
import ModalUI from "../UI/Modal";
/* All The Styles Listed Here*/

const rootStyle = {
  justifyContent: "center",
  color: Colors.purple,
  padding: "5%",
  paddingTop: "5%",
};

const ImgStyle = {
  width: 350,
  height: 450,
  marginTop: "3%",
  marginBottom: "2%",
};

const DescriptionStyle = {
  maxWidth: 450,
};

/* Main Component The FrontPage of The Book */
const FrontPage = (props) => {
  const [open, setOpen] = useState(false);
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
          <ImageView Image={props.Book.BookImage} />

          <MyButton
            Type="outlined"
            onClick={() => setOpen(true)}
            ButtonText="Request Book"
          />
        </Grid>

        <Grid item>
          <BookDescription
            Title={props.Book.BookName}
            Description={props.Book.Description}
            Author={props.Book.Author}
          />
        </Grid>
        <Grid item>
          <Info
            price={props.Book.Price}
            ISBN_NO={props.Book.ISBN_NO}
            Pages={props.Book.Pages}
            Author={props.Book.Author}
          />
        </Grid>
      </Grid>
      <ModalUI open={open} handleOpen={handleOpen} handleClose={handleClose}>
        <BookRequestPage handleClose={handleClose} />
      </ModalUI>
      ;
    </Fragment>
  );
};
export default FrontPage;

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
