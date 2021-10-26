import { Colors } from "../../UI/colors";
import { Fragment ,useState} from "react";
import { CssTextAreaField } from "../../UI/FormInput";
import { HeadLine1 } from "../../UI/HeadLine";
import { NextButton, PrevButton } from "../../UI/NextPrev";
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
       
        <PrevButton onClick={() => props.Dec()}/>
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
      
          <NextButton  onClick={onClickNext}/>
          
        
      </div>
    </Fragment>
  );
};

export default Description;
