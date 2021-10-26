import { Fragment } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Book003 from "../../Media/Book003.png";
import { useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Colors } from "../UI/colors";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../Api/AxiosApi";

const CatergoryWiseBooks = (props) => {
  let BookData = [
    {
      id: "01",
      Name: "Norwegien Woods",
      Author: "haruki murakami",
      pages: "300",
      price: 200,
    },
  ];
  const CategoryNo = props.CategoryNo;
  const { data } = useSWR(`/postbyCategory/${CategoryNo}/`, fetcher);
  if (data) {
    ///console.log(data);
    data.map(
      (Book) =>
        (BookData = [
          ...BookData,
          {
            id: `${Book.title} ${Book.published}`,
            Name: Book.title,
            Author: "Aman Gope",
            price: "200",
            pages: "200",
            excerpt: Book.excerpt,
            status: Book.status,
            published: Book.published,
          },
        ])
    );
    console.log(BookData);
  }
  const CategoryName = props.CategoryName;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currBook, setCurrBook] = useState(0);

  const OnNext = () => {
    if (currBook === BookData.length - 1) return;
    setCurrBook((curr) => curr + 1);
  };
  const OnPrev = () => {
    if (currBook === 0) return;
    setCurrBook((curr) => curr - 1);
  };

  function GiveBookListForLargeScreen(State, BookNo) {
    if (State === "A") {
      return BookData.map((CurrBookData) => (
        <Grid item sx={{ marginInline: "1%" }}>
          <BookCover
            id={CurrBookData.id}
            key={CurrBookData.id}
            Image={Book003}
            BookName={CurrBookData.Name}
          />
        </Grid>
      ));
    } else {
      let BookList = [];
      for (let ind = 0; ind < 5; ind++) {
        if (ind + BookNo >= BookData.length) break;
        const CurrBookData = BookData[BookNo + ind];
        const ListItem = (
          <Grid item sx={{ marginInline: "1%" }}>
            <BookCover
              id={CurrBookData.id}
              key={CurrBookData.id}
              Image={Book003}
              BookName={CurrBookData.Name}
            />
          </Grid>
        );
        BookList = [...BookList, ListItem];
      }
      return BookList;
    }
  }
  function GiveBookListForSmallScreen(State, BookNo) {
    if (State === "A") {
      return BookData.map((CurrBookData) => (
        <Grid item sx={{ marginInline: "1%" }}>
          <BookCover key={CurrBookData.id} Image={Book003} />
        </Grid>
      ));
    } else {
      let BookList = [];
      for (let ind = 0; ind < 3; ind++) {
        if (ind + BookNo >= BookData.length) break;
        const CurrBookData = BookData[BookNo + ind];
        const ListItem = (
          <Grid item sx={{ marginInline: "1%" }}>
            <BookCover key={CurrBookData.id} Image={Book003} />
          </Grid>
        );
        BookList = [...BookList, ListItem];
      }
      return BookList;
    }
  }
  let BookList;
  if (isMobile) {
    console.log("yes");
    if (BookData.length < 3)
      BookList = GiveBookListForSmallScreen("A", currBook);
    else if (currBook + 3 > BookData.length)
      BookList = GiveBookListForSmallScreen("B", BookData.length - 3);
    else BookList = GiveBookListForSmallScreen("B", currBook);
  } else {
    if (BookData.length < 5)
      BookList = GiveBookListForLargeScreen("A", currBook);
    else if (currBook + 5 > BookData.length)
      BookList = GiveBookListForLargeScreen("B", BookData.length - 5);
    else BookList = GiveBookListForLargeScreen("B", currBook);
  }

  return (
    <div
      style={{
        marginBottom: "4%",
        maxWidth: "100vw",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <h1>
        Explore In {CategoryName}{" "}
        <span style={{ fontSize: "1ch", color: Colors.NotDark }}>See All</span>
      </h1>

      <Grid container sx={{}}>
        <NavigateBefore onClick={OnPrev} sx={{ marginTop: "4ch" }} />

        {BookList}

        <NavigateNext onClick={OnNext} sx={{ marginTop: "4ch" }} />
      </Grid>
    </div>
  );
};

export default CatergoryWiseBooks;
/** End of the main Function */

const ImageCss = {
  maxWidth: "15vw",
  height: "20ch",
};
export const BookCover = (props) => {
  const url = "/Post";
  const Id = props.id;
  return (
    <Fragment>
      <Link to={`${url}/${Id}`}>
        {" "}
        <img src={props.Image} alt="BookCover" style={ImageCss} />
      </Link>

      <h5
        style={{
          maxWidth: "10vw",
          textAlign: "center",
          color: Colors.purple,
          padding: "1%",
        }}
      >
        <Link to={`${url}/${Id}`}>{props.BookName}</Link>
      </h5>
    </Fragment>
  );
};
