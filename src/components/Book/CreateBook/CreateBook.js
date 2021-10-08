import { Button, Fab, Typography } from "@mui/material";
import { Colors } from "../../UI/colors";
import { TextField,  TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fragment, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: Colors.LightBlue,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: Colors.purple,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: Colors.purple,
    },
  },

  /// borderRadius: "50px 50px 0 0"
});

const CssTextAreaField = styled(TextareaAutosize)({
  background: "rgba(187, 205, 242, 0.37)",
  border: `3px solid white`,
  borderRadius: "10%",
  padding: "5%",
  margin: "2%",
  "&:hover": {
    border: `3px solid ${Colors.purple}`,
  },
  color: Colors.purple,
  fontSize: "3ch",
  fontWeight: "bold",
});

const TextCss = {
  textAlign: "center",
};

/*Introduction */
export const Introduction = (props) => {
  return (
    <Fragment>
      <Typography variant="h2" sx={TextCss}>
        <span style={{ fontWeight: "900" }}> Welcome</span> to our{" "}
        <span
          style={{
            fontWeight: "900",
            textDecoration: `6px ${Colors.LightBlue} underline`,
          }}
        >
          {" "}
          community
        </span>{" "}
        of growing{" "}
        <span style={{ fontWeight: "900", color: Colors.purple }}>Writers</span>
        .let's start by giving a nice name to your Book.
      </Typography>
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "5%",
          display: "flex",
        }}
      >
        <CssTextField
          fullWidth
          label="Name of your Book"
          id="Name_of_the_book"
          sx={{
            marginInline: "2%",
            borderRadius: "2ch",
            [`& fieldset`]: {
              borderRadius: 15,
            },
          }}
          /// InputProps={{className:InputCss}}
        />
        <Fab
          sx={{
            background: Colors.purple,
            "&:hover": { background: Colors.LightBlue },
          }}
          onClick={() => props.Inc()}
        >
          <ArrowBackIcon
            sx={{
              color: "white",
              fontSize: "5ch",
              transform: "rotateY(180deg)",
            }}
          />
        </Fab>
      </div>
    </Fragment>
  );
};

/**Description */
export const Description = (props) => {
  return (
    <Fragment>
      <Typography variant="h2" sx={TextCss}>
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
      </Typography>
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
          multiline
          aria-label="minimum height"
          minRows="10"
          placeholder="What's the book is about"
          style={{ width: "40vw" }}
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
            onClick={() => props.Inc()}
          />
        </Fab>
      </div>
    </Fragment>
  );
};

export const DeadLine = (props) => {
  return (
    <Fragment>
      <Typography variant="h2" sx={TextCss}>
        Please select an{" "}
        <span
          style={{
            fontWeight: "900",
            textDecoration: `6px ${Colors.LightBlue} underline`,
          }}
        >
          Deadline
        </span>{" "}
        for the <span style={{ fontWeight: "900" }}>Requests</span> for{" "}
        <span style={{ fontWeight: "900", color: Colors.purple }}>Review</span>
      </Typography>
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "5%",
          display: "flex",
        }}
      >
        <Fab
          sx={{
            background: Colors.purple,
            "&:hover": { background: Colors.LightBlue },
            marginInline: "1%",
          }}
          onClick={() => props.Dec()}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "5ch" }} />
        </Fab>
        <CssTextField
          fullWidth
          type="date"
          id="date"
          sx={{
            marginInline: "2%",
            borderRadius: "2ch",
            [`& fieldset`]: {
              borderRadius: 15,
            },
          }}
          /// InputProps={{className:InputCss}}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          margin: "auto",
          display: "block",
          marginTop: "2%",
          background: Colors.purple,
        }}
      >
        Submit
      </Button>
    </Fragment>
  );
};

const CreateBook = () => {
  const [stepNo, setstepNo] = useState(0);

  const IncreaseStep = () => {
    setstepNo((prev) => prev + 1);
  };
  const DecreaseStep = () => {
    setstepNo((prev) => prev - 1);
  };
  return (
    <div style={{ maxWidth: 950, margin: "auto", padding: "5%" }}>
      {stepNo === 0 && <Introduction Inc={IncreaseStep} Dec={DecreaseStep} />}
      {stepNo === 1 && <Description Inc={IncreaseStep} Dec={DecreaseStep} />}
      {stepNo === 2 && <DeadLine Inc={IncreaseStep} Dec={DecreaseStep} />}
    </div>
  );
};

export default CreateBook;
