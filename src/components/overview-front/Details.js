import { ClassNames } from "@emotion/react";
import { Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { update_time } from "../../helper/Helper";

const MinuteDetails = ({ name, source, item }) => {
  return (
    <Grid container sx={{ marginTop: "20px" }}>
      {/* <Grid item xs={1}></Grid> */}
      <Grid item xs={3}>
        <img src={source} height="25px" />
      </Grid>
      <Grid item xs={6} textAlign="left" paddingLeft="20px">
        {name}
      </Grid>
      <Grid item xs={3} textAlign="left">
        {item}
      </Grid>
      {/* <Grid item xs={1}></Grid> */}
    </Grid>
  );
};

const Details = ({ city }) => {
  const { isLoading, final_res } = useWeatherData();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Grid container marginBottom="20px">
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

        <Grid
          item
          xs={12}
          md={6}
          boxShadow="0px 20px 2px -20px rgb(179, 179, 179)"
        >
          <MinuteDetails
            name="Wind"
            source="https://img.icons8.com/color/48/000000/wind.png"
            item={final_res.current.wind_speed + " km/h"}
          />
        </Grid>

        {/* <Grid item md={2}></Grid> */}

        <Grid
          item
          xs={12}
          md={6}
          boxShadow="0px 20px 2px -20px rgb(179, 179, 179)"
        >
          <MinuteDetails
            name="Humidity"
            source="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png"
            item={final_res.current.humidity + " %"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          boxShadow="0px 20px 2px -20px rgb(179, 179, 179)"
        >
          <MinuteDetails
            name="Dew Point"
            source="https://img.icons8.com/fluency/48/000000/dew-point.png"
            item={final_res.current.dew_point + " deg"}
          />
        </Grid>

        {/* <Grid item md={2}></Grid> */}

        <Grid
          item
          xs={12}
          md={6}
          boxShadow="0px 20px 2px -20px rgb(179, 179, 179)"
        >
          <MinuteDetails
            name="Pressure"
            source="https://img.icons8.com/color/48/000000/pressure.png"
            item={final_res.current.pressure + " mb"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MinuteDetails
            name="UV"
            source="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-uv-index-weather-justicon-lineal-color-justicon.png"
            item={final_res.current.uvi + " of 10"}
          />
        </Grid>

        {/* <Grid item md={2}></Grid> */}

        <Grid item xs={12} md={6}>
          <MinuteDetails
            name="Visibility"
            source="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-visibility-content-creator-xnimrodx-lineal-gradient-xnimrodx.png"
            item={final_res.current.visibility / 1000 + " km"}
          />
        </Grid>
      </Grid>
    );
  }
};

export default Details;
