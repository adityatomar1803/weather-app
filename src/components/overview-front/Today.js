import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { Grid } from "@mui/material";
import { update_time } from "../../helper/Helper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Today = ({ city }) => {
  const { isLoading, final_res } = useWeatherData();
  const navigate = useNavigate();

  const day_data = {
    morning: { temp: 0, icon: 0, clouds: 0 },
    afternoon: { temp: 0, icon: 0, clouds: 0 },
    evening: { temp: 0, icon: 0, clouds: 0 },
    night: { temp: 0, icon: 0, clouds: 0 },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    let morning = final_res.hourly.find((st) => update_time(st.dt) === "9:30");
    let afternoon = final_res.hourly.find(
      (st) => update_time(st.dt) === "13:30"
    );
    let evening = final_res.hourly.find((st) => update_time(st.dt) === "17:30");
    let night = final_res.hourly.find((st) => update_time(st.dt) === "21:30");

    day_data.morning = {
      temp: morning.temp,
      icon: morning.weather[0].icon,
      clouds: morning.clouds,
    };
    day_data.afternoon = {
      temp: afternoon.temp,
      icon: afternoon.weather[0].icon,
      clouds: afternoon.clouds,
    };
    day_data.evening = {
      temp: evening.temp,
      icon: evening.weather[0].icon,
      clouds: evening.clouds,
    };
    day_data.night = {
      temp: night.temp,
      icon: night.weather[0].icon,
      clouds: night.clouds,
    };
    return (
      <div>
        <div
          style={{ fontSize: "1.6rem", fontWeight: "bold", padding: "1.3rem" }}
        >
          Today's forecast for {city}
        </div>
        <Grid container fontSize="larger">
          <Grid item xs={3} className="today-home">
            <div style={{ marginBottom: "0.6rem" }}> Morning</div>
            <div
              style={{ fontSize: "2rem", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.morning.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.morning.icon}@2x.png`}
              height="40%"
              width="auto"
              alt="ico-img"
            />
            <div>
              {day_data.morning.clouds}%
              <img
                height="15px"
                src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
                alt="morning clouds"
              />
            </div>
          </Grid>
          <Grid item xs={3} className="today-home">
            <div style={{ marginBottom: "0.6rem" }}> Afternoon</div>
            <div
              style={{ fontSize: "2rem", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.afternoon.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.afternoon.icon}@2x.png`}
              height="40%"
              alt="ico-img"
            />
            <div>
              {day_data.afternoon.clouds}%
              <img
                height="15px"
                src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
                alt="raindrop icon"
              />
            </div>
          </Grid>
          <Grid item xs={3} className="today-home">
            <div style={{ marginBottom: "0.6rem" }}> Evening</div>
            <div
              style={{ fontSize: "2rem", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.evening.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.evening.icon}@2x.png`}
              height="40%"
              alt="ico-img"
            />
            <div>
              {day_data.evening.clouds}%
              <img
                height="15px"
                src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
                alt="raindrop icon"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div style={{ marginBottom: "0.6rem" }}> Night</div>
            <div
              style={{ fontSize: "2rem", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.night.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.night.icon}@2x.png`}
              height="40%"
              alt="ico-img"
            />
            <div>
              {day_data.night.clouds}%{" "}
              <img
                height="15px"
                src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
                alt="raindrop icon"
              />
            </div>
          </Grid>

          <Grid item xs={12} marginTop="25px" marginBottom="25px">
            <Button
              variant="contained"
              sx={{
                borderRadius: "0.6rem",
                fontSize: "small",
                padding: "0.5rem",
                // marginRight: "auto",
              }}
              onClick={() => {
                return navigate("/hourly");
              }}
            >
              View Hours
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Today;
