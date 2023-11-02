import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useRef } from 'react';


export default function TwoLineForm({ handleInput }) {

  const formRef = useRef(null);
  
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    handleInput(data.get('text1'), data.get('text2'))

    formRef.current.reset();
  }

  return (
    <>
      <Box component='form' onSubmit={handleSubmit} ref={formRef}>
        <TextField
          required
          fullWidth
          variant='outlined'
          label='text1'
          name='text1'
          id='text1'
          autoFocus
          sx={{m: 1}}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          label='text2'
          name='text2'
          id='text2'
          sx={{m: 1}}
        />
        <Button type='submit' variant='contained' sx={{m: 1}}>Submit</Button>
      </Box>
    </>
  );
}
