import { Button } from "@mui/material";
import { Colors } from "../components/UI/colors";
import {  useState } from "react";
import Introduction  from "../components/Book/CreateBook/Introduction";
import DeadLine from "../components/Book/CreateBook/DeadLine";
import Description from "../components/Book/CreateBook/AddDescription";



/**Description */

const CreateBook = () => {
  const [stepNo, setstepNo] = useState(0);
  const [BookName, setBookName] = useState("");
  const [BookDescription, setBookDescription] = useState("");
  const [BookDeadLine, setBookDeadLine] = useState("");

  const IncreaseStep = () => {
    setstepNo((prev) => prev + 1);
  };
  const DecreaseStep = () => {
    setstepNo((prev) => prev - 1);
  };
  const onClickSubmit=()=>{
    console.log({
      BookName:BookName,
      BookDescription:BookDescription,
      BookDeadLine:BookDeadLine
    })
  }
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
        <DeadLine
          Inc={IncreaseStep}
          Dec={DecreaseStep}
          BookDeadLine={BookDeadLine}
          setBookDeadLine={setBookDeadLine}
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
