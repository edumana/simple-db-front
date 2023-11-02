import { Box, Button, Card, CardActionArea, Container, Grid, Typography } from "@mui/material";
import { centerFlex } from "../constants/stylingConstants";
import GoogleMapReact from 'google-map-react';
import * as clinicianService from '../services/clinicianService'
import * as bookingService from '../services/bookingService'
import { useEffect, useState } from "react";
import ClinicianLocation from "../components/ClinicianLocation";
import Colors from "../constants/colors";


export default function ClinicianMap() {

  const [clinicians, setClinicians] = useState([])
  const [activeClinician, setActiveClinician] = useState({})
  const [selectedSlot, setSelectedSlot] = useState('')

  function handleMapClick(id) {
    setActiveClinician(clinicians.find(e => e._id === id))
  }

  function handleBooking() {
    bookingService.postBooking({
      time: selectedSlot,
      clinician: activeClinician._id,
      patine: 'Eduardo'
    })
    .then(createdBooking => console.log(createdBooking))
    .catch(err => console.error(err))
  }

  function fetchClinicians() {
    clinicianService.indexClinicians()
      .then(clinicians => setClinicians(clinicians))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchClinicians()
  }, [])

  function MapBox() {
    return (
      <>
        <Typography variant='h4' sx={{mb: 1}}>Clinician Map</Typography>
        <Box sx={{ height: '45vh', width: '60vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API }}
            defaultCenter={{
              lat: 25.7215,
              lng: -80.2684
            }}
            defaultZoom={11}
          >
            {
              clinicians.map((clinician, i) =>
                <ClinicianLocation
                  clinician={clinician}
                  key={i}
                  lat={clinician.location.lat}
                  lng={clinician.location.lng}
                  handleMapClick={handleMapClick}
                />
              )
            }
          </GoogleMapReact>
        </Box>
      </>

    )
  }

  function ClinicianBox() {

    return (
      <>
        <Typography variant='h4' sx={{mb: 1}}>Clinician Details</Typography>
        <Box sx={{...clinicianBox}}>
          <Typography variant='h4'>{`Name: ${activeClinician.name}`}</Typography>
          {
            activeClinician.specialty?.map((e, i) => <Typography key={i}>{e}</Typography>)
          }
          <Box>
            { 
              activeClinician.availableSlots?.map((slot, i) => 
                <Card key={i} sx={{m: 1}} onClick={() => setSelectedSlot(slot)}>
                  <CardActionArea>
                    <Typography>{slot}</Typography>
                  </CardActionArea>
                </Card>
              )
            }
          </Box>
          <Box sx={{m: 1}}>
            <Typography>{`Selected Slot: ${selectedSlot}`}</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            {selectedSlot ? <Button variant='contained' onClick={() => handleBooking()}>Schedule Appointment</Button> : null}
          </Box>
        </Box>
      </>

    )
  }

  return (
    <>
      <Container maxWidth='lg' sx={{ ...containerStyles }}>
        <Grid container>
          <Grid item md={8} sx={{ ...gridLeft }}>
            <MapBox />
          </Grid>
          <Grid item md={4} sx={{ ...gridRight }}>
            {activeClinician.name ? <ClinicianBox /> : null}
          </Grid>
        </Grid>
        
      </Container >
    </>
  )
}

const containerStyles = {
  height: '100vh',
  ...centerFlex,
  flexDirection: 'column'
}

const gridLeft = {
  display: 'flex', 
  alignItems: 'center', 
  flexDirection: 'column', 
  justifyContent: 'flex-start', 
}

const gridRight = {
  display: 'flex', 
  alignItems: 'center', 
  flexDirection: 'column', 
  justifyContent: 'flex-start', 
}

const clinicianBox = {
  display: 'flex', 
  width: '100%', 
  backgroundColor: Colors.stLightGray, 
  height: '100%', 
  borderRadius: 3,
  flexDirection: 'column',
  p: 2
}
