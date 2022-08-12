import { Box, Button } from '@mui/material'
import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom'


function Home() {
  let navigate = useNavigate(); 
  
  return (
    <Box className='App'>
    <h1>Welcome to Jobeefy</h1>
   <Button variant="contained" color="success" onClick={() => navigate("/info")}>APPLY HERE !!</Button>

    </Box>
  )
}

export default Home