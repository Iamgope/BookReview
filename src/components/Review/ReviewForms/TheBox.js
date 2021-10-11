import { Box } from "@mui/system"
import Classes from './TheBox.module.css'
const TheBox=(props)=>{
return     <Box className={Classes.Box}>
    {props.children}
</Box>
}

export default TheBox;