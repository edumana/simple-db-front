import { Box } from '@mui/system'
import SampleItemDisplay from './SampleItemDisplay.jsx'
import Colors from '../constants/colors.js'


export default function DataDisplay({ data, handleDelete}){
  

  
  return(
    <>
      <Box sx={{
        backgroundColor: Colors.stLightGray, 
        height: '60vh',
        alignItems: 'center',
        borderRadius: 5,
        overflowY: 'scroll'
        }}>
          {data.map((sample, i) => 
            <SampleItemDisplay 
              sample={sample} 
              handleDelete={handleDelete} 
              key={`key-${i}`}/>
          )}
      </Box>
    </>
  )
}