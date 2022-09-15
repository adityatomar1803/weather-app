import { Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { update_time } from "../../helper/Helper";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Button } from "@mui/material";
import { update_date } from "../../helper/Helper";

const MinuteDetails = ({ item }) => {
  return (
    <Grid
      container
      border="1px solid #d4d4d5"
      marginBottom="0.6rem"
      borderRadius="0.6rem"
    >
      <Grid item xs={12} md={6}>
        <div>{update_date(item)} | Day</div>

        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.6rem",
            }}
          >
            <span
              style={{
                margin: "0.rem",
              }}
            >
              <img
                className="DailySun"
                src="https://img.icons8.com/fluency/48/000000/sunrise.png"
                alt="img could not be loaded"
              />
            </span>
            <span> Sunrise: {update_time(item.sunrise)}</span>
            <span
              style={{
                margin: "0.3rem",
              }}
            >
              <img
                className="DailySun"
                src="https://img.icons8.com/fluency/48/000000/sunset.png"
                alt="img could not be loaded"
              />
            </span>
            <span>Sunset: {update_time(item.sunset)}</span>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.3rem",
            }}
          >
            <span
              style={{
                margin: "0.3rem",
              }}
            >
              <img
                className="DailySun"
                src="https://img.icons8.com/fluency/48/000000/temperature.png"
                alt="img could not be loaded"
              />
            </span>
            <span>Temperature: {parseInt(item.temp.day - 273.15)}&#176;</span>
            <span>
              , Feels Like: {parseInt(item.feels_like.day - 273.15)}&#176;
            </span>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <div>{update_date(item)} | Night</div>

        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.3rem",
            }}
          >
            <span
              style={{
                margin: "0.3rem",
              }}
            >
              <img
                className="DailySun"
                src="https://img.icons8.com/fluency/48/000000/moonrise.png"
                alt="img could not be loaded"
              />
            </span>
            <span>Moonrise: {update_time(item.moonrise)}</span>
            <span
              style={{
                margin: "0.3rem",
              }}
            >
              <img
                className="DailySun"
                src="https://img.icons8.com/fluency/48/000000/moonset.png"
                alt="img could not be loaded"
              />
            </span>
            <span>Moonset: {update_time(item.moonset)}</span>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.3rem",
            }}
          >
            <span
              style={{
                margin: "0.3rem",
              }}
            >
              <img
                className="DailySun"
                src="https://img.icons8.com/fluency/48/000000/temperature.png"
                alt="img could not be loaded"
              />
            </span>
            <span>Temperature: {parseInt(item.temp.night - 273.15)}&#176;</span>

            <span>
              , Feels Like: {parseInt(item.feels_like.night - 273.15)}&#176;
            </span>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0.6rem",
            }}
          >
            <img
              className="PressureWeeklyImage"
              src="https://img.icons8.com/color/48/000000/pressure.png"
              alt="img could not be loaded"
            />{" "}
            Pressure: {item.pressure}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0.6rem",
            }}
          >
            <img
              className="HumidityWeeklyImage"
              src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png"
              alt="img could not be loaded"
            />{" "}
            Humidity: {item.humidity}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0.6rem",
            }}
          >
            <img
              className="DewWeeklyImage"
              src="https://img.icons8.com/fluency/48/000000/dew-point.png"
              alt="img could not be loaded"
            />{" "}
            Dew Point: {item.dew_point}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0.6rem",
            }}
          >
            <img
              className="UvWeeklyImage"
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-uv-index-weather-justicon-lineal-color-justicon.png"
              alt="img could not be loaded"
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

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      borderBottom="1px solid #d4d4d5"
    >
      <Grid item xs={1} textAlign="end">
        {update_date(item)}
      </Grid>

      <Grid item xs={2} fontSize="1.1rem" fontWeight="bold">
        {parseInt(item.temp.max - 273.15)}&#176;/
        {parseInt(item.temp.min - 273.15)}&#176;
      </Grid>
      <Grid item xs={3} display="flex" alignItems="center">
        <img
          className="hourlyWeatherImage"
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="ico-img"
        />
        <span>{item.weather[0].main}</span>
      </Grid>

      <Grid item xs={1}></Grid>

      <Grid item xs={2}>
        {item.clouds}%
        <img
          className="hourlyRainImage"
          src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
          alt="img could not be loaded"
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
          alt="img could not be loaded"
          className="hourlyWindImage"
        />
        {item.wind_speed} km/h
      </Grid>

      <Grid item xs={1}>
        <Button onClick={handleClick}>
          <img
            height="15px"
            src="https://img.icons8.com/fluency/48/000000/expand-arrow.png"
            alt="img could not be loaded"
            style={{ marginRight: "2rem" }}
          />
        </Button>
      </Grid>

      <Grid item xs={11}>
        <Collapse in={open} timeout="auto" unmountOnExit>
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

const DailyCard = ({ city }) => {
  const { isLoading, final_res } = useWeatherData();

  if (!isLoading) {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={"0.3rem"}
        marginBottom="0.6rem"
      >
        <Grid
          item
          xs={11}
          sm={9}
          md={8}
          lg={7}
          backgroundColor={"white"}
          marginTop="0.6rem"
          borderRadius="0.6rem"
          boxShadow= {blackTheme? "none" : "0px 5px 18px #888888"}
        >
          <div style={{ marginTop: "1.3rem" }}>
            <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
              Daily Weather -{" "}
            </span>
            <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              {city}{" "}
            </span>
            <div style={{ fontSize: "1.3rem", marginTop: "10px" }}>
              {" "}
              As of {update_time(final_res.current.dt)}
            </div>
          </div>
          <div
            style={{
              marginTop: "1.6rem",
              paddingTop: "1rem",
              borderTop: "1px solid aliceblue",
            }}
          >
            {<DisplayData data={final_res.daily} />}
          </div>
        </Grid>
      </Grid>
    );
  } else {
    <div>Loading</div>;
  }
};

export default DailyCard;
