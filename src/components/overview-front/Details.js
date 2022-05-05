import { Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { update_time } from "../../helper/Helper";

const Details = ({ city }) => {
  const { isLoading, final_res } = useWeatherData();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ fontSize: "25px", fontWeight: "bold", margin: "20px" }}
        >
          Details of Weather at {city}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "grid",
            paddingBottom: "20px",
            borderBottom: "1px solid #c4c4c4",
          }}
        >
          <span style={{ fontSize: "30px", fontWeight: "bold", color: "blue" }}>
            {parseInt(final_res.current.feels_like - 273.15)}&#176;
          </span>
          <span>Feels Like</span>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #c4c4c4",
          }}
        >
          <span
            style={{
              margin: "20px",
            }}
          >
            <img src="https://img.icons8.com/fluency/48/000000/sunrise.png" />
          </span>
          <span>{update_time(final_res.current.sunrise)}</span>
          <span
            style={{
              margin: "20px",
            }}
          >
            <img src="https://img.icons8.com/fluency/48/000000/sunset.png" />
          </span>
          <span>{update_time(final_res.current.sunset)}</span>
          {/* <span>Feels Like</span> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <span>
            <img
              src="https://img.icons8.com/color/48/000000/wind.png"
              height="25px"
            />
            <span>Wind</span>
          </span>
          <span>{final_res.current.wind_speed}</span>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png"
            height="25px"
          />
          <span>Humidity</span>
          <span>{final_res.current.humidity}</span>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.icons8.com/fluency/48/000000/dew-point.png"
            height="25px"
          />
          <span>Dew Point</span>
          <span>{final_res.current.dew_point}</span>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.icons8.com/color/48/000000/pressure.png"
            height="25px"
          />
          <span>Pressure</span>
          <span>{final_res.current.pressure}</span>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-uv-index-weather-justicon-lineal-color-justicon.png"
            height="25px"
          />
          <span>Uv</span>
          <span>{final_res.current.uvi}</span>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-visibility-content-creator-xnimrodx-lineal-gradient-xnimrodx.png"
            height="25px"
          />
          <span>Visibility</span>
          <span>{final_res.current.visibility}</span>
        </Grid>
      </Grid>
    );
  }
};

export default Details;
