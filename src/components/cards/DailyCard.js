import { Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { update_time } from "../../helper/Helper";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Button } from "@mui/material";

const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MinuteDetails = ({ item }) => {
  const date = new Date(item.dt * 1000);
  return (
    <Grid
      container
      border="1px solid #d4d4d5"
      marginBottom="10px"
      borderRadius="10px"
    >
      <Grid item xs={12} md={6}>
        <div>{day[date.getDay()] + " " + date.getDate()} | Day</div>

        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              // borderBottom: "1px solid #c4c4c4",
            }}
          >
            <span
              style={{
                margin: "5px",
              }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/sunrise.png" />
            </span>
            <span>{update_time(item.sunrise)}</span>
            <span
              style={{
                margin: "5px",
              }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/sunset.png" />
            </span>
            <span>{update_time(item.sunset)}</span>
            {/* <span>Feels Like</span> */}
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              // borderBottom: "1px solid #c4c4c4",
            }}
          >
            <span
              style={{
                margin: "5px",
              }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/temperature.png" />
            </span>
            <span>Temperature: {parseInt(item.temp.day - 273.15)}&#176;</span>
            {/* <span
              style={{
                margin: "5px",
              }}
            >
              <img src="" />
            </span> */}
            <span>
              , Feels Like: {parseInt(item.feels_like.day - 273.15)}&#176;
            </span>
            {/* <span>Feels Like</span> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <div>{day[date.getDay()] + " " + date.getDate()} | Night</div>

        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              // borderBottom: "1px solid #c4c4c4",
            }}
          >
            <span
              style={{
                margin: "5px",
              }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/moonrise.png" />
            </span>
            <span>{update_time(item.moonrise)}</span>
            <span
              style={{
                margin: "5px",
              }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/moonset.png" />
            </span>
            <span>{update_time(item.moonset)}</span>
            {/* <span>Feels Like</span> */}
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              // borderBottom: "1px solid #c4c4c4",
            }}
          >
            <span
              style={{
                margin: "5px",
              }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/temperature.png" />
            </span>
            <span>Temperature: {parseInt(item.temp.night - 273.15)}&#176;</span>
            {/* <span
              style={{
                margin: "5px",
              }}
            >
              <img src="" />
            </span> */}
            <span>
              , Feels Like: {parseInt(item.feels_like.night - 273.15)}&#176;
            </span>
            {/* <span>Feels Like</span> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img
              height="25px"
              src="https://img.icons8.com/color/48/000000/pressure.png"
            />{" "}
            Pressure: {item.pressure}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img
              height="25px"
              src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png"
            />{" "}
            Humidity: {item.humidity}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img
              height="25px"
              src="https://img.icons8.com/fluency/48/000000/dew-point.png"
            />{" "}
            Dew Point: {item.dew_point}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img
              height="25px"
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-uv-index-weather-justicon-lineal-color-justicon.png"
            />
            UV Index: {item.uvi}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const Accordian = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // var t = update_time(item.dt);
  const date = new Date(item.dt * 1000);

  return (
    <Grid
      container
      alignItems="center"
      borderBottom="1px solid #d4d4d5"
      justifyContent="space-evenly"
    >
      <Grid item xs={1} textAlign="end">
        {day[date.getDay()] + " " + date.getDate()}
      </Grid>

      <Grid item xs={2} fontSize="18px" fontWeight="bold">
        {parseInt(item.temp.max - 273.15)}&#176;/
        {parseInt(item.temp.min - 273.15)}&#176;
      </Grid>
      <Grid item xs={2} display="flex" alignItems="center">
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          height="70px"
          alt="ico-img"
        />
        {/* {item.weather[0].icon} */}
        <span>{item.weather[0].main}</span>
      </Grid>

      <Grid item xs={2}></Grid>

      <Grid item xs={2}>
        {item.clouds}%
        <img
          height="15px"
          src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
          // style={{ transform: "rotateX(45)" }}
        />
      </Grid>

      <Grid
        item
        xs={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src="https://img.icons8.com/color/48/000000/wind.png"
          height="25px"
          style={{ marginRight: "10px" }}
        />
        {item.wind_speed} km/h
        {/* {item.wind_speed > 0 && item.wind_speed < 90
          ? " NE"
          : item.wind_speed === 90
          ? " E"
          : item.wind_speed > 90 && item.wind_speed < 180
          ? " SE"
          : item.wind_speed === 180
          ? " S"
          : item.wind_speed > 180 && item.wind_speed < 270
          ? "SW"
          : item.wind_speed === 270
          ? "W"
          : item.wind_speed > 270 && item.wind_speed < 359
          ? "NW"
          : item.wind_speed === 0
          ? "N"
          : ""} */}
      </Grid>
      <Grid item xs={1}>
        <Button onClick={handleClick}>
          <img
            height="20px"
            src="https://img.icons8.com/fluency/48/000000/expand-arrow.png"
          />
        </Button>
      </Grid>

      <Grid item xs={11}>
        {/* {console.log("inside the grid")} */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          {/* {console.log("inside collapse component")}dsfdf */}
          <MinuteDetails item={item} />
        </Collapse>
      </Grid>
    </Grid>
  );
};

const DisplayData = ({ data }) => {
  var i = -1;
  return (
    <Grid container>
      {data.map((item) => {
        return <Accordian key={++i} item={item} />;
      })}
    </Grid>
  );
};

export const DailyCard = ({ city }) => {
  const { isLoading, final_res } = useWeatherData();
  // console.log("inside hourly card");

  if (!isLoading) {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={"5px"}
        marginBottom="10px"
      >
        <Grid
          item
          xs={12}
          md={7}
          backgroundColor={"white"}
          marginTop="10px"
          borderRadius="10px"
        >
          <div style={{ marginTop: "20px" }}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              Daily Weather -{" "}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {city}{" "}
            </span>
            <div style={{ fontSize: "20px", marginTop: "10px" }}>
              {" "}
              As of {update_time(final_res.current.dt)}
            </div>
          </div>
          <div
            style={{
              marginTop: "25px",
              paddingTop: "15px",
              borderTop: "1px solid aliceblue",
            }}
          >
            {/* {<DisplayData data={final_res.hourly} />} */}
            {<DisplayData data={final_res.daily} />}
          </div>
        </Grid>
      </Grid>
    );
  } else {
    <div>Loading</div>;
  }
};
