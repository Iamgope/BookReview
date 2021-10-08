import {  Fragment } from "react";
import { Typography, Grid,} from "@mui/material";
import Book003 from "../../Media/Book003.png";
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
];
const CatergoryWiseBooks = (props) => {
  const CategoryName = props.CategoryName;
  //const [BookData, setBookData] = useState([]);
  //setBookData(DummyBookData);

  const BookList = BookData.map((Book) => (
    <Grid item sx={{ marginInline: "1.5%" }}>
      <BookCover key={Book.id} Image={Book003} />
    </Grid>
  ));
  return (
    <Fragment>
      <Typography variant="h5" gutterBottom sx={{marginLeft:'1%',marginBottom:'1ch',color:'#002058'}}>
        Explore In <span style={{ fontWeight: 600 }}>{CategoryName}</span>
      </Typography>
      <Grid container sx={{marginBottom:'4%'}}>
        {BookList}
      </Grid>
    </Fragment>
  );
};
export default CatergoryWiseBooks;
/** End of the main Function */

const ImageCss = {
  maxWidth: 130,
  height: 180,
};
export const BookCover = (props) => {
  return (
    <Fragment>
      <img src={props.Image} alt="BookCover" style={ImageCss} />
    </Fragment>
  );
};
