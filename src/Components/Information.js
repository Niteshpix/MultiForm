import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  
} from "@mui/material";

function Information() {
  
  const [form, setForm] = React.useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm(e.target.value)
  };

  return ( 
    <div className=''>
      <form >
        <Box>
          <Grid container spacing={2} >
            <Grid item xs={12} md={6}>
              <TextField
                id="firstName"
                label="FirstName"
                name="FirstName"
                onChange={handleChange}
                error={form===""}
            
                helperText={form === "" ? "Empty Filled!" : " "}
              />
              <TextField
                id="LastName"
                label="LastName"
                name="LastName"
                onChange={handleChange}
                error={form===""}
                helperText={form===""?"Empty Filled!":" "}
              />
              <TextField
                fullWidth
                label="gmail"
                id="fullWidth"
                onChange={handleChange}
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phone"
                onChange={handleChange}
              />
            </Grid>
           
          </Grid>
          {/*<Button type="submit" style={{margin:"auto", display:"flex  "}}>Submit</Button>*/}
        </Box>

      </form>
    </div>
  );
}

export default Information;
