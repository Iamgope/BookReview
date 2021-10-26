import { Fab } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Colors } from "./colors"
export  const NextButton=(props)=>{
  return <Fab
  sx={{
    background: Colors.purple,
    "&:hover": { background: Colors.LightBlue },
  }}
  onClick={props.onClick}
>
  <ArrowBackIcon
    sx={{
      color: "white",
      fontSize: "5ch",
      transform: "rotateY(180deg)",
    }}
  />
</Fab>
}

export  const PrevButton=(props)=>{
    return <Fab
    sx={{
      background: Colors.purple,
      "&:hover": { background: Colors.LightBlue },
    }}
    onClick={props.onClick}
  >
    <ArrowBackIcon
      sx={{
        color: "white",
        fontSize: "5ch",
        
      }}
    />
  </Fab>
  }