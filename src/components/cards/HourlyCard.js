import { Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { update_time } from "../../helper/Helper";

// const update_time = (timestamp) => {
//   var date = new Date(timestamp * 1000);
//   // Hours part from the timestamp
//   var hours = date.getHours();
//   // Minutes part from the timestamp
//   var minutes = "0" + date.getMinutes();
//   // Seconds part from the timestamp
//   // var seconds = "0" + date.getSeconds();

//   // Will display time in 10:30:23 format
//   var formattedTime =
//     // hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
//     hours + ":" + minutes.substr(-2);

//   return formattedTime;
// };

const displayData = (data) => {
  var i = 0;
  return (
    <Grid container>
      {data.hourly.map((item) => {
        var t = update_time(item.dt);
        return (
          <Grid container key={i++}>
            <Grid item xs={2} md={2}>
              {t}
            </Grid>
            <Grid item xs={2} md={2}>
              {item.temp}
            </Grid>
            <Grid item xs={3} md={3}>
              {item.weather[0].icon}
              {item.weather[0].main}
            </Grid>
            <Grid item xs={2} md={2}>
              {item.clouds}
            </Grid>
            <Grid item xs={3} md={3}>
              {item.wind_speed}
              {item.wind_deg}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export const HourlyCard = ({ city }) => {
  const { isLoading, final_res } = useWeatherData();
  console.log("inside hourly card");

  if (!isLoading) {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={"5px"}
      >
        <Grid item xs={12} md={7} backgroundColor={"white"}>
          <div>
            <span>Hourly Weather </span>
            <span>{city} </span>
            <div> As of {update_time(final_res.current.dt)}</div>
          </div>
          <div>{displayData(final_res)}</div>
        </Grid>
      </Grid>
    );
  } else {
    <div>Loading</div>;
  }
};
