import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

function Information() {
  
  const [form, setForm] = React.useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm(e.target.value)
  };

  return (
     
    <div>
      <form >
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",

            margin: "auto",
            border: "2px solid grey",
            height: "60vh",
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "20px",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2">
                Information Details
              </Typography>
              <TextField
                style={{ marginRight: "22px", marginBottom: "10px" }}
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
          <Button type="submit" style={{margin:"auto", display:"flex  "}}>Submit</Button>
        </Box>
      </form>
    </div>
  );
}

export default Information;
