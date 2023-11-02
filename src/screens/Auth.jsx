import { Container, Typography } from '@mui/material';
import { centerFlex } from '../constants/stylingConstants';
import SimpleAuth from '../components/SimpleAuth';

export default function Auth({ handleLoginOrSignup, authStatus }) {

  return (
    <>
      <Container 
        maxWidth='sm' 
        sx={{ ...centerFlex, height: '100vh', flexDirection: 'column' }}
      >
        <Typography variant='h3' sx={{m:2}}>{ authStatus }</Typography>
        <SimpleAuth handleLoginOrSignup={handleLoginOrSignup}/>
      </Container>
    </>
  );
}
