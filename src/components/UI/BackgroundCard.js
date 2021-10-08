import {Box} from '@mui/material'
import { Colors } from './colors';
const NiceBox=(props)=>{
  return <Box sx={{background:Colors.LightBlue,borderRadius:'2ch',width:'150%',paddingInline:0}}>
      <div style={{padding:'10%'}}>
      {props.children}

      </div>

  </Box>
}
export default NiceBox;