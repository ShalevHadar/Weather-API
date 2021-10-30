import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// allow every domain to get the data - read more about it
app.use(cors());


const locationURL =
  "http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=" +
  process.env.API_KEY;

app.get("/cities", async (req, res) => {
  const response = await fetch(locationURL);
  const data = await response.json();
  const weatherData = data.map(item => ({
    name: item.EnglishName,
    key: item.Key
    // add country
  }))
  res.send(weatherData);
});

// {key} | :key
app.get("/cities/:key/forecast", async (req,res) => {
  const {key} = req.params;
  const forecastAPI = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.API_KEY}&metric=true`
  const response = await fetch(forecastAPI);
  const data = await response.json();
  const forecastData = data.DailyForecasts.map(item => ({
    date: item.Date,
    minTemp: Math.round(item.Temperature.Minimum.Value),
    maxTemp: Math.round(item.Temperature.Maximum.Value),
    dayIcon: item.Day.Icon,
    dayIconPhrase: item.Day.IconPhrase,
    nightIcon: item.Night.Icon,
    nightIconPhrase: item.Night.IconPhrase
  }))
  res.send(forecastData)
})

// localhost:30001/cities/215854/forecast

app.listen(port, () => {
  console.log(`Weather-API app listening at http://localhost:${port}`);
});
