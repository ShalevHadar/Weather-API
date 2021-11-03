import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import Moment from "react-moment";

export default function ForecastCard(props) {

  
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <Moment format="dddd">{props.date}</Moment>
        </Typography>
        <div style={{width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CardMedia
            sx={{maxWidth: '100%'}}
            component="img"
            image={`/assets/${props.icon}.png`}
            alt="Icony"
          />
            </div>
        <Typography variant="body2" color="text.secondary">
          Max Temp:{props.maxTemp}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Min Temp:{props.minTemp}
        </Typography>
      </CardContent>
    </Card>
  );
}
