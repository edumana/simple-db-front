import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { centerFlex } from '../constants/stylingConstants';
import { useEffect, useState } from 'react';
import * as bookService from '../services/bookService.js'
import BookItem from '../components/BookItem';
import Colors from '../constants/colors';
import { dispPrice } from '../constants/helperFunctions';

export default function InterHome() {

  const [books, setBooks] = useState([])
  const [activeBook, setActiveBook] = useState({})

  function fetchBooks() {
    bookService.indexBooks()
      .then(books => setBooks(books))
      .catch(err => console.log(err))
  }

  function handleBookSelection(id) {
    setActiveBook(books.find(book => book._id === id))
  }

  // useEffect(()=> {
  //   console.log(activeBook)
  // }, [activeBook])

  useEffect(() => {
    fetchBooks()
  }, [])

  function BookList() {
    return (
      <Box sx={{ backgroundColor: Colors.stLightGray, height: '100%', p: 1, borderRadius: 3 }}>
        {
          books?.map((book, index) => <BookItem key={`key-${index}`} book={book} handleBookSelection={handleBookSelection} />)
        }
      </Box>)
  }

  function BookItemInfo() {
    return (
      <>
        <Box sx={{ backgroundColor: Colors.stLightGray, height: '100%', width: '100%', p: 4, borderRadius: 3 }}>
          <Stack>
            <Typography variant='h3'>{activeBook.title}</Typography>
            <Typography variant='h6'>{dispPrice(activeBook.price)}</Typography>

            <TextField sx={{}} size='small'></TextField>
            <Button variant='contained' sx={{ m: 2 }}>Add to Cart</Button>
          </Stack>
        </Box>
      </>)
  }

  return (
    <>
      <Container maxWidth='lg' sx={containerStyles}>
        <Grid container sx={{ height: '80vh' }} spacing={3}>
          <Grid item sm={7}>
            <Box sx={{ height: '100%', width: '100%' }}>
              <BookList />
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box sx={{ height: '100%', width: '100%' }}>
              {activeBook.title ? <BookItemInfo /> : <Typography>Please Select a Book</Typography>}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}


const containerStyles = {
  ...centerFlex,
  height: '100vh',
  flexDirection: 'column'
};
