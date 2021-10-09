import { Fab} from "@mui/material";
import { Colors } from "../../UI/colors";
import { Fragment ,useState} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CssTextAreaField } from "../../UI/FormInput";
import { HeadLine1 } from "../../UI/HeadLine";
const Description = (props) => {
  const onChangeDescription = (event) => {
    props.setBookDescription(event.target.value);
    setisColorRed(false);
  };

  const [isColorRed, setisColorRed] = useState(false);
  const onClickNext = () => {
    if (props.BookDescription.trim().length === 0) {
      setisColorRed(true);
      return;
    }
    props.Inc();
  };
  return (
    <Fragment>
      <HeadLine1>
        Please Tell us{" "}
        <span
          style={{
            fontWeight: "900",
            textDecoration: `6px ${Colors.LightBlue} underline`,
          }}
        >
          more
        </span>{" "}
        about your Book,<span style={{ fontWeight: "900" }}>We</span> are{" "}
        <span style={{ fontWeight: "900", color: Colors.purple }}>
          Intrested!
        </span>
      </HeadLine1>
      {isColorRed && (
        <h5 style={{ textAlign: "center", color: "red" }}>
          Please fill Book Description
        </h5>
      )}
      <div display="flex">
        <Fab
          sx={{
            background: Colors.purple,
            "&:hover": { background: Colors.LightBlue },
          }}
          onClick={() => props.Dec()}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "5ch" }} />
        </Fab>
        <CssTextAreaField
          multiline="True"
          aria-label="minimum height"
          minRows="7"
          placeholder="What's the book is about"
          style={{ width: "40vw" }}
          onChange={onChangeDescription}
          value={props.BookDescription}
          sx={{marginInline:'5%'}}
        />
        <Fab
          sx={{
            background: Colors.purple,
            "&:hover": { background: Colors.LightBlue },
          }}
        >
          <ArrowBackIcon
            sx={{
              color: "white",
              fontSize: "5ch",
              transform: "rotateY(180deg)",
            }}
            onClick={onClickNext}
          />
        </Fab>
      </div>
    </Fragment>
  );
};

export default Description;
