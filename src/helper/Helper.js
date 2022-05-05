// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   marginTop: "10px",
//   color: theme.palette.text.secondary,

// }));
// import React, { useState } from "react";
// export default Item;

export function get_Lat_n_Lon(city_name) {
  // const [isLoading, setIsLoading]= useState(true);
  var isLoading = true;
  console.log("inside get lat n lon with", city_name);
  var city = city_name.split(",", 2)[0];
  var country = city_name.split(",", 2)[1];
  console.log(city, country);

  var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=e816dd76c2a342a9f38f34843d0a039d`;

  async function getAPI(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    console.log(
      "inside getAPI in get lat n lon",
      data[0]["lat"],
      data[0]["lon"]
    );
    isLoading = false;
    return [data[0]["lat"], data[0]["lon"], isLoading];
  }

  return getAPI(url);
}

export const update_time = (timestamp) => {
  var date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  // var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    // hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    hours + ":" + minutes.substr(-2);

  return formattedTime;
};
