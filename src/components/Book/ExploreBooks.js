import { Box } from "@mui/system";
import CatergorywiseBooks from "./CategoryWiseBooks";

const ExploreBooks = (props) => {
  return <Box sx={{width:'70%',margin:'auto'}}>
    <CatergorywiseBooks CategoryName="Thriller" CategoryNo={1} />
    <CatergorywiseBooks CategoryName="Romance" CategoryNo={2 }/>
    <CatergorywiseBooks CategoryName="Fiction" CategoryNo={3 }/>
  </Box>;
};
export default ExploreBooks;
