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
import React from "react";

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
                {...register("firstName", {
                  required: "First Name is required.",
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
              <TextField
                id="LastName"
                label="LastName"
                name="lastName"
                onChange={handleChange}
                {...register("lastName", {
                  required: "Last Name is required.",
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
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
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
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
                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        {...register("gender", {
                          required: "Choose your gender",
                        })}
                      />
                    }
                    label="other"
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
