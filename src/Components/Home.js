import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  let navigate = useNavigate(); 
  
  return (
    <Box className='App'>
    <h1>Welcome to Jobeefy</h1>
   
   <Button  onClick={() => navigate("/info")}>APPLY NOW</Button>

    </Box>
  )
}

export default Home