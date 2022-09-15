import React, { useState, useEffect, useCallback } from "react";
import { useWeatherData } from "../../context/weather.context";

import { ButtonGroup } from "@mui/material";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { update_time } from "../../helper/Helper";

var c_variant = null;
var f_variant = null;
var k_variant = null;
// var temp = 0;
const OverView = ({ city, boxShadow }) => {
  const { isLoading, final_res } = useWeatherData();
  const [temp, setTemp] = useState(0);

  // const temperatureGetter =
  const temperatureGetter = useCallback(
    (type = "C") => {
      if (type === "C") {
        c_variant = "contained";
        f_variant = "outlined";
        k_variant = "outlined";
        // temp = parseInt(final_res.current.temp - 273.15);
        setTemp(parseInt(final_res.current.temp - 273.15));
      } else if (type === "K") {
        c_variant = "outlined";
        f_variant = "outlined";
        k_variant = "contained";
        // temp = parseInt(final_res.current.temp);
        setTemp(parseInt(final_res.current.temp));
      } else {
        c_variant = "outlined";
        k_variant = "outlined";
        f_variant = "contained";
        // temp = parseInt(((final_res.current.temp - 273.15) * 9) / 5 + 32);
        setTemp(parseInt(((final_res.current.temp - 273.15) * 9) / 5 + 32));
      }
      // console.log("c, k, f are :", c_variant, k_variant, f_variant);
      // return temp;
    },
    [final_res]
  );

  useEffect(() => {
    if (!isLoading) {
      temperatureGetter();
    }
  }, [isLoading, temperatureGetter]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    // console.log("OverView:: The final res is", final_res);
    // console.log("c, k, f are :", c_variant, k_variant, f_variant);
    var desc = final_res.current.weather[0].icon;
    // console.log(desc);
    // console.log(desc === "01d");
    // console.log("OverView:: The final res is", final_res);
    // ()=>temperatureGetter();
    return (
      <Grid
        container
        className={
          desc === "01d"
            ? "card card-1d"
            : desc === "01n"
            ? "card card-1n"
            : desc === "02d"
            ? "card card-2d-3d"
            : desc === "03d"
            ? "card card-2d-3d"
            : desc === "02n"
            ? "card card-2n-3n"
            : desc === "03n"
            ? "card card-2n-3n"
            : desc === "04d"
            ? "card card-4d"
            : desc === "04n"
            ? "card card-4n"
            : desc === "09d"
            ? "card card-10d-09d"
            : desc === "10d"
            ? "card card-10d-09d"
            : desc === "09n"
            ? "card card-10n-09n"
            : desc === "10n"
            ? "card card-10n-09n"
            : desc === "11d"
            ? "card card-11d"
            : desc === "11n"
            ? "card card-11n"
            : desc === "13d"
            ? "card card-13d"
            : desc === "13n"
            ? "card card-13n"
            : desc === "50d"
            ? "card card-50d"
            : "card card-50n"
        }
        marginTop="1.5rem"
        sx={{
          color: "white",
        }}
        boxShadow={boxShadow}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="div"
            textAlign={"center"}
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "1rem",
              // color: "blue",
              background: "rgba(40, 40, 40, 0.3)",
              padding: "0.3rem",
            }}
          >
            {city}{" "}
          </Typography>
          <span fontSize="0.7rem" color="#5c64d2">
            As of {update_time(final_res.current.dt)}
          </span>
        </Grid>

        <Grid
          container
          className="card-content"
          marginBottom="2.5rem"
          justifyContent="space-evenly"
          paddingBottom="1rem"
        >
          <Grid item xs={6} md={4}>
            <img
              src={`http://openweathermap.org/img/wn/${final_res.current.weather[0].icon}@2x.png`}
              height="100px"
              alt="openweather map icon"
            />
          </Grid>

          {/* /////// Text Grid ///////// */}

          <Grid item xs={6} md={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "0.6rem",
              }}
            >
              <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{temp}</div>

              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
                variant="outlined"
                size="normal"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.3rem",
                  margin: "0.3rem",
                }}
              >
                <Button
                  variant={c_variant ? c_variant : "contained"}
                  className="tempButton"
                  onClick={() => temperatureGetter("C")}
                >
                  &#8451;
                </Button>
                <Button
                  variant={f_variant ? f_variant : "outlined"}
                  className="tempButton"
                  onClick={() => temperatureGetter("F")}
                >
                  &#8457;
                </Button>
                <Button
                  variant={k_variant ? k_variant : "outlined"}
                  className="tempButton"
                  onClick={() => temperatureGetter("K")}
                >
                  &#8490;
                </Button>
              </ButtonGroup>
            </div>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "bolder",
                marginTop: "1rem",
              }}
            >
              <span style={{ display: "block", marginBottom: "0.3rem" }}>
                {" "}
                {final_res.current.weather[0].main}{" "}
              </span>
              Day {parseInt(final_res.hourly[23].temp - 273.15)} &#xb0; | Night{" "}
              {parseInt(final_res.hourly[47].temp - 273.15)} &#xb0;
            </span>
          </Grid>

          {/* ////////// Grid extra data ///////// */}

          <Grid
            item
            xs={12}
            md={4}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            fontSize="1rem"
            fontWeight="525"
          >
            <div className="extra">
              <span style={{ display: "block", marginBottom: "0.2rem" }}>
                {" "}
                Feels Like : {parseInt(final_res.current.feels_like - 273.15)}
              </span>
              <span style={{ display: "block", marginBottom: "0.2rem" }}>
                {" "}
                Wind Speed : {final_res.current.wind_speed} kmph{" "}
                <span className="material-icons"></span>
              </span>
              <span style={{ display: "block", marginBottom: "0.2rem" }}>
                visibility : {parseInt(final_res.current.visibility / 1000)}
              </span>
              <span style={{ display: "block", marginBottom: "0.2rem" }}>
                Humidity : {final_res.current.humidity}%
              </span>
            </div>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    );
  }
};

export default OverView;
