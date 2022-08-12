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
      <Container sx={{ m: 3 }} component="main" maxWidth="lg">
        <CssBaseline />
        <div className={""}>
          <form className={""}>
            <Grid container spacing={2}>
             
            <Grid item xs={12} sm={8}>
                <FormControl sx={{ minWidth: 730 }}>
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

              <Grid item xs={12} sm={3}>
                <FormControl sx={{ minWidth: 355 }}>
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

              <Grid item xs={12} sm={4}>
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
