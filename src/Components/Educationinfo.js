import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, CssBaseline, Grid } from "@mui/material";
import GeoLocation from "../Pages/GeoLocation";




export default function Educationinfo({formData, setFormData}) {

  //const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  
  console.log(formData)
  

  console.log({
    country,
    state,
    city,
  });

  return (
    <div>
      <Container sx={{ m: 3 }} component="main" style={{margin:"auto" }} >
        <CssBaseline />
        <div className={""}>
          <form className={""}>
            <Grid container spacing={2} style={{ display:"flex" }}>
            <Grid item xs={12}  md={8}   >
                <FormControl style={{width:"47.5rem"}} >
                  <InputLabel>Your College*</InputLabel>
                  <Select
                    value={formData.College}
                    name="College"
                    label="Your College"
                    onChange={(e) => {
                      setFormData({ ...formData, College: e.target.value });
                    }}
                  
                  >
                    <MenuItem name="College">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Ten">Sddiet</MenuItem>
                    <MenuItem value="Twenty">Panipat Uni</MenuItem>
                    <MenuItem value="Thirty">Patana Uni</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4} >
                <FormControl sx={{ minWidth: 355 }} style={{width:'23rem'}}>                  
                  <Select value={formData.Qualification} label="Your Qualification" name="Qualification" onChange={(e) => {
                      setFormData({ ...formData, Qualification: e.target.value });
                    }}>
                    <MenuItem value={formData.Qualification}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="B.tech">B.tech</MenuItem>
                    <MenuItem value="M.tech">M.tech</MenuItem>
                    <MenuItem value="BCA">BCA</MenuItem>
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
