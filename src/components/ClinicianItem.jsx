import { Box, Typography } from "@mui/material";

export default function ClinicianItem({ clinician }) {





  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: 1, p: 1, backgroundColor: '#FFF', borderRadius: 3 }}>
        <Typography variant='subtitle2'>{clinician.name}</Typography>
      </Box>
    </>)
}