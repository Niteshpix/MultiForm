import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, CssBaseline, Grid } from "@mui/material";
import GeoLocation from "../Pages/GeoLocation";

// const useStyles = makeStyles(theme => ({
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   }
// }));

export default function Educationinfo() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  console.log({
    country,
    state,
    city,
  });

  return (
    <div>
<<<<<<< HEAD
      <Container component="main" maxWidth="lg">
=======
      <Container sx={{ m: 3 }} component="main" style={{margin:"auto" }} >
>>>>>>> a1ce96751ce8e51e1961814e52c5c7fd271cfb0b
        <CssBaseline />
        <div className={""}>
          <form className={""}>
            <Grid container spacing={2} style={{ display:"flex" }}>
             
<<<<<<< HEAD
            <Grid item xs={12} sm={9}>
                <FormControl sx={{ minWidth: 500 }}>
=======
            <Grid item xs={12}  md={8}   >
                <FormControl style={{width:"47.5rem"}} >
>>>>>>> a1ce96751ce8e51e1961814e52c5c7fd271cfb0b
                  <InputLabel>Your College*</InputLabel>
                  <Select
                    value={age}
                    label="Your College"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4} >
                <FormControl sx={{ minWidth: 355 }} style={{width:'23rem'}}>
                  <InputLabel>Your Qualification</InputLabel>
                  <Select value={age} label="Your Qualification" onChange={handleChange}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <GeoLocation
                  locationTitle="Country"
                  isCountry
                  onChange={setCountry}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <GeoLocation
                  locationTitle="State"
                  onChange={setState}
                  geoId={country}
                />
              </Grid>

              <Grid item xs={6} sm={2}>
                <GeoLocation
                  locationTitle="City"
                  onChange={setCity}
                  geoId={state}
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
