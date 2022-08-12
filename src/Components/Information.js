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
  
} from "@mui/material";


import { useForm } from "react-hook-form";

function Information() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            margin: "auto",
            
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              marginTop: "30px",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6} >
              <TextField
              fullWidth
                id="firstName"
                label="FirstName"
                name="FirstName"
                onChange={handleChange}
                {...register("firstName", {
                  required: "First Name is required.",
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              
              />
              <TextField
              fullWidth
                id="LastName"
                label="LastName"
                name="lastName"
                onChange={handleChange}
                {...register("lastName", {
                  required: "Last Name is required.",
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                style={{marginTop:"10px"}}
              />
              <TextField
                fullWidth
                label="gmail"
                id="fullWidth"
                name="email"
                onChange={handleChange}
                {...register("email", {
                  required: "E-mail Address is required.",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                style={{marginTop:"10px"}}
              />
              <FormControl style={{ display:'flex' }} >
                <FormLabel id="demo-radio-buttons-group-label" style={{ display:'flex' }}>
                  Gender
                </FormLabel>
                <RadioGroup 
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                >
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        {...register("gender", {
                          required: "Choose your gender",
                        })}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        {...register("gender", {
                          required: "Choose your gender",
                        })}
                      />
                    }
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
                {...register("email", {
                  required: "E-mail Address is required.",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </Grid>
          </Grid>
          <Button type="submit" style={{ margin: "auto", display: "flex  " , marginTop:"10px"}}>
            Next
          </Button>
        </Box>

      </form>
    </div>
  );
}

export default Information;
