import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { dispPrice } from "../constants/helperFunctions";

export default function BookItem({ book, handleBookSelection }){




  return (
    <>
      <Card sx={{p: 2, m: 1}} onClick={() => handleBookSelection(book._id)}>
        <CardActionArea>
          <Box sx={{m: 1}}>
            <Typography variant='h5'>{book.title}</Typography>
            <Typography variant='body2'>{book.author.name}</Typography>
            <Typography variant='subtitle2'>{dispPrice(book.price)}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </>
  )
}