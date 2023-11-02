import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useRef } from 'react';


export default function AimpleAuth({ handleLoginOrSignup }) {

  const formRef = useRef(null);
  const buttonRef = useRef(null)
  
  function handleMouseDown(buttonName){
    buttonRef.current = buttonName
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (buttonRef.current) {
      handleLoginOrSignup(data.get('email'), data.get('password'), buttonRef.current)
    }
    buttonRef.current = null
    formRef.current.reset()
  }

  return (
    <>
      <Box component='form' onSubmit={handleSubmit} ref={formRef}>
        <TextField
          required
          fullWidth
          variant='outlined'
          label='email'
          name='email'
          id='email'
          autoFocus
          sx={{m: 1}}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          label='password'
          name='password'
          id='password'
          type='password'
          sx={{m: 1}}
        />
        <Button 
          type='submit' 
          name='login'
          variant='contained' 
          onMouseDown={() => handleMouseDown('login')}
          sx={{m: 1}}>Login
        </Button>
        <Button 
          type='submit' 
          name='signup'
          variant='contained' 
          color='secondary' 
          onMouseDown={() => handleMouseDown('signup')}
          sx={{m: 1}}>Signup
        </Button>
      </Box>
    </>
  );
}
