import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";
import ForecastCard from "../ForecastCard/ForecastCard";
import { Box } from "@mui/system";

export default function Results(props) {
  const { citykey } = useParams();
  const [days, setDays] = useState([]);
  const [error, setError] = useState();

  //const apiUrl = 'http://localhost:3001/cities?query=tel'

  useEffect(() => {
    const locationURL = `http://localhost:3001/cities/${citykey}/forecast`
    axios.get(locationURL, {
      validateStatus: (status) => {
        return status < 400;
      }
    }).then((res) => {
      setDays(res.data);
    }).catch(error => {
      setError(error.toJSON().message)
    })
  }, [citykey]);


  return (
    <Box >
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }} justifyContent="center">
      {error ? error : (
        days.map((item) => (
          <Grid item key={item.date}>
            <ForecastCard  icon={item.dayIcon} date={item.date} minTemp={item.minTemp} maxTemp={item.maxTemp}/>
          </Grid>
        )))}
      </Grid>
    </Box>
  );
}
