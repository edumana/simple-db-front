import { Grid, Typography, Button, Box, Paper } from '@mui/material'
import Colors from '../constants/colors'

export default function SampleItemDisplay({ sample, handleDelete }) {


  return (
    <Box>
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 1,
        backgroundColor: Colors.stLightBlue,
        borderRadius: 5,
      }}>
        <Grid container>
          <Grid item sm={9}>
            <Typography variant='h5' sx={{ m: 1 }}>{sample._id}</Typography>
            <Typography variant='body1' sx={{ m: 1 }}>{sample.value1}</Typography>
            <Typography variant='body1' sx={{ m: 1 }}>{sample.value2}</Typography>
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button
              size='small'
              color='error'
              variant='contained'
              onClick={() => handleDelete(sample._id)}
              sx={{ m: 2 }}>Delete
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}