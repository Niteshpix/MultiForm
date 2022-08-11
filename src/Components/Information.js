import { Box, Grid, TextField } from '@mui/material'
import React from 'react'

function Information() {
  return (
    <div>
        <Box >
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField label="FirstName"></TextField>
            </Grid>
            <Grid item xs={12} md={6} >
                <TextField label="LastName"></TextField>
            </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default Information