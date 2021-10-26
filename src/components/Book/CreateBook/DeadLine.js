import { Colors } from "../../UI/colors";
import { Fragment } from "react";
import { CssTextField } from "../../UI/FormInput";
import { HeadLine1 } from "../../UI/HeadLine";
import { PrevButton } from "../../UI/NextPrev";
const DeadLine = (props) => {
  const onChangeDeadLine = (event) => {
    props.setBookDeadLine(event.target.value);
  };
  //current date in js

  return (
    <Fragment>
      <HeadLine1>
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
      </HeadLine1>

      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "5%",
          display: "flex",
        }}
      >
        <PrevButton onClick={() => props.Dec()} />

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
          onChange={onChangeDeadLine}
          value={props.BookDeadLine}
        />
      </div>
    </Fragment>
  );
};
export default DeadLine;
