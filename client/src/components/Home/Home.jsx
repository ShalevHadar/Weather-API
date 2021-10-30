import React, { useEffect, useState } from "react"
import { Autocomplete, Grid, TextField } from "@mui/material"
import { Box } from "@mui/system"
import axios from 'axios'
import { useHistory } from "react-router";

export default function Form() {
  const history = useHistory();

  const onResults = (key) => {
    history.push(`/forecast/${key}`);    
  };

  const [cities, setCities] = useState([])

  // then similar to await ,different syntax

  const apiURL = 'http://localhost:3001/cities'
  
  useEffect(() => {
    axios.get(apiURL).then((res) => {
      setCities(res.data)
    })
    console.log("DB poked, careful !");
  }, [])

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Autocomplete
            disablePortal
            options={cities}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />
            }
            getOptionLabel={city => city.name}
            onChange={(event, city) => onResults(city.key)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
