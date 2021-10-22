import { Fragment } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Book003 from "../../Media/Book003.png";
import { useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Colors } from "../UI/colors";
import { Link } from "react-router-dom";
const BookData = [
  {
    id: "01",
    Name: "Norwegien Woods",
    Author: "haruki murakami",
    pages: "300",
    price: 200,
  },
  {
    id: "02",
    Name: "Kafka on the shore",
    Author: "Haruki murakami",
    pages: "350",
    price: 400,
  },
  {
    id: "03",
    Name: "A Little Life",
    Author: "japanui Again",
    pages: "750",
    price: 400,
  },
  {
    id: "04",
    Name: "The Sapiens",
    Author: "Yuval Noah harari",
    pages: "490",
    price: 300,
  },
  {
    id: "05",
    Name: "Black Holes:BBC lectures",
    Author: "Hawking",
    pages: "80",
    price: 100,
  },
  {
    id: "06",
    Name: "Black Holes:BBC lectures",
    Author: "Hawking",
    pages: "80",
    price: 100,
  },
  {
    id: "07",
    Name: "Black Holes:BBC lectures",
    Author: "Hawking",
    pages: "80",
    price: 100,
  },
  {
    id: "08",
    Name: "Black Holes:BBC lectures",
    Author: "Hawking",
    pages: "80",
    price: 100,
  },
  {
    id: "09",
    Name: "Black Holes:BBC lectures",
    Author: "Hawking",
    pages: "80",
    price: 100,
  },
];
const CatergoryWiseBooks = (props) => {
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
          <p>{CurrBookData.id}</p>
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
            <p>{CurrBookData.id}</p>
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
          <p>{CurrBookData.id}</p>
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
            <p>{CurrBookData.id}</p>
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
      <img src={props.Image} alt="BookCover" style={ImageCss} />

      <h5 style={{ maxWidth: "12vw", textAlign: "center",color:Colors.purple }}>
        <Link to={`${url}/${Id}`}>{props.BookName}</Link>
      </h5>
    </Fragment>
  );
};
