import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Colors from "../constants/colors";
import { centerFlex } from "../constants/stylingConstants";

export default function ClinicianLocation({ clinician, handleMapClick }) {


  return (
    <>
      <Box sx={{...pinStyle}}>
        <Card sx={{...paperStyle}} onClick={() => handleMapClick(clinician._id)}>
          <CardActionArea>
            <Typography variant='subtitle2' sx={{...nameStyles}}>{clinician.name}</Typography>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

const nameStyles = {
  whiteSpace: 'nowrap', 
  overflow: 'hidden', 
  textOverflow: 'ellipsis', 
  zIndex: 0,
  paddingX: 1,
  fontSize: '0.8em'
}

const pinStyle = { 
    width: 8, 
    height: 8, 
    borderRadius: 50, 
    backgroundColor: Colors.stPurple,
    p: 0.8,
    position: 'absolute',
    left: -4,
    right: -4,
    zIndex: 2,
}

const paperStyle = {
  width: 80, 
  ...centerFlex, 
  zIndex: 1, 
  m: 0.5
}
