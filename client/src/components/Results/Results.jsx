import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";
import ForecastCard from "../ForecastCard/ForecastCard";
import { Box } from "@mui/system";

export default function Results(props) {
  const { citykey } = useParams();
  const [days, setDays] = useState([]);

  useEffect(() => {
    
    const locationURL = `http://localhost:3001/cities/${citykey}/forecast`
    console.log(locationURL);
    axios.get(locationURL).then((res) => {
      setDays(res.data);
    });
    console.log("hey");
  }, [citykey]);


  return (
    <Box >
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }} justifyContent="center">
        {days.map((item) => (
          <Grid item key={item.date}>
            <ForecastCard  icon={item.dayIcon} date={item.date} minTemp={item.minTemp} maxTemp={item.maxTemp}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
