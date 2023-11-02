import { Box, Button, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { centerFlex } from '../constants/stylingConstants';
import * as sampleService from '../services/sampleService';
import DataDisplay from '../components/DataDisplay';
import DataInput from '../components/DataInput';

export default function Home({ handleLogout, admin }) {

  const [status, setStatus] = useState('')
  const [data, setData] = useState([])

  function fetchData() {
    sampleService.indexSample()
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  function handleInput(input1, input2) {
    setStatus('loading...')
    sampleService.postSample({ value1: input1, value2: input2 })
      .then(res => {
        if (res.status === 201) {
          setStatus('Success!')
          fetchData()
        }
      })
      .catch(err => console.log(err))
  }

  function handleDelete(id) {
    sampleService.deleteSample(id)
      .then(deletedSample => {
        if (deletedSample.status === 200) fetchData()
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  function LeftPanel() {
    return <DataInput handleInput={handleInput} status={status} />
  }

  function RightPanel() {
    return <DataDisplay handleDelete={handleDelete} data={data} />
  }

  return (
    <>
      <Container maxWidth='lg' sx={containerStyles}>
        <Box sx={boxStyles}>
          <Button color='error' onClick={() => handleLogout()}>Logout</Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item sm={7} sx={leftGridStyles}>
            <LeftPanel />
          </Grid>
          <Grid item sm={5}>
            <RightPanel />
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

const boxStyles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end'
};

const leftGridStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start'
};