import React from "react";

import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Input({
  half,
  name,
  label,
  type,
  autoFocus,
  handleChange,
  handleShowPassword,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        type={type}
        autoFocus={autoFocus}
        onChange={handleChange}
        variant="outlined"
        autoComplete="off"
        required
        fullWidth
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  edge="end"
                >
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
}
