import { useState } from "react";
import { HeadLine1 } from "../../UI/HeadLine";
import { Colors } from "../../UI/colors";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import {PrevButton } from "../../UI/NextPrev";
const Input = styled("input")({
  display: "none",
});

const AddImage = (props) => {
    const [isUploaded, setisUploaded] = useState(false);
  const onChangeHandler = (e) => {
    props.setBookImage(e.target.files[0]);
    setisUploaded(true);
  };
  return (
    <>
      <HeadLine1>
        Give a Nice{" "}
        <span
          style={{
            fontWeight: "900",
            textDecoration: `6px ${Colors.LightBlue} underline`,
          }}
        >
          BookCover
        </span>{" "}
        for your Book,<span style={{ fontWeight: "900" }}>Upload</span> as{" "}
        <span style={{ fontWeight: "900", color: Colors.purple }}>photo</span>
      </HeadLine1>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <PrevButton onClick={() => props.Dec()} />
        <label htmlFor="contained-button-file" style={{ marginInline: "7%" }}>
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={onChangeHandler}
          />
          <Button
            variant="contained"
            component="span"
            sx={{
              fontSize: "2.5ch",
              background: Colors.purple,
              "&:hover": { background: Colors.LightBlue },
              
            }}
          >
            {isUploaded?'Uploaded':'Upload'}
          </Button>
        </label>
      
      </div>
    </>
  );
};
export default AddImage;
