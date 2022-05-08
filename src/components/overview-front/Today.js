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
        <div style={{ fontSize: "25px", fontWeight: "bold", padding: "20px" }}>
          Today's forecast for {city}
        </div>
        <Grid container fontSize="larger">
          <Grid item xs={3} style={{ borderRight: "1px solid #ddd" }}>
            <div> Morning</div>
            <div
              style={{ fontSize: "30px", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.morning.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.morning.icon}@2x.png`}
              height="auto"
              alt="ico-img"
            />
            <div>{day_data.morning.clouds}%</div>
          </Grid>
          <Grid item xs={3} style={{ borderRight: "1px solid #ddd" }}>
            <div> Afternoon</div>
            <div
              style={{ fontSize: "30px", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.afternoon.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.afternoon.icon}@2x.png`}
              height="auto"
              alt="ico-img"
            />
            <div>{day_data.afternoon.clouds}%</div>
          </Grid>
          <Grid item xs={3} style={{ borderRight: "1px solid #ddd" }}>
            <div> Evening</div>
            <div
              style={{ fontSize: "30px", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.evening.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.evening.icon}@2x.png`}
              height="auto"
              alt="ico-img"
            />
            <div>{day_data.evening.clouds}%</div>
          </Grid>
          <Grid item xs={3} style={{ borderRight: "1px solid #ddd" }}>
            <div> Night</div>
            <div
              style={{ fontSize: "30px", color: "blue", fontWeight: "bold" }}
            >
              {parseInt(day_data.night.temp - 273.15)}&#176;
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${day_data.night.icon}@2x.png`}
              height="auto"
              alt="ico-img"
            />
            <div>{day_data.night.clouds}%</div>
          </Grid>

          <Grid item xs={12} marginTop="25px" marginBottom="25px">
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                fontSize: "small",
                padding: "8px",
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
