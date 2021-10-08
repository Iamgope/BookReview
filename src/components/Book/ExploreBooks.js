import { Box } from "@mui/system";
import CatergorywiseBooks from "./CategoryWiseBooks";

const ExploreBooks = () => {
  return <Box sx={{width:'70%',margin:'auto'}}>
    <CatergorywiseBooks CategoryName="Thriller" />
    <CatergorywiseBooks CategoryName="Romance" />
    <CatergorywiseBooks CategoryName="Fiction" />
  </Box>;
};
export default ExploreBooks;
