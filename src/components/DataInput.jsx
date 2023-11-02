import { Box, Typography } from '@mui/material'
import TwoLineForm from './TwoLineForm.jsx'
import { centerFlex } from '../constants/stylingConstants.js'

export default function DataInput({ handleInput, status }){
  

  
  return(
    <Box sx={{maxWidth: '75%', ...centerFlex, flexDirection: 'column'}}>
      <Typography variant='h3' sx={{ m: 1 }}>Sample Inputs</Typography>
      <TwoLineForm handleInput={handleInput} />
      <Typography variant='subtitle2'>{status}</Typography>
    </Box>
  )
}