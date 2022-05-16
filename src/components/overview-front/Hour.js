import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { Grid } from "@mui/material";
import { update_time } from "../../helper/Helper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Det = ({ data }) => {
  let i = 0;
  console.log("inside det");
  return data.map((item) => {
    i++;
    // console.log("inside det map,", item, item.dt);
    return (
      <Grid
        item
        sm={2}
        style={{
          boxShadow: "1px 0px 0px 0px rgb(179, 179, 179)",
        }}
        marginBottom="5rem"
      >
        <div>
          <div style={{ fontSize: "larger", marginBottom: "1rem" }}>
            {i === 1 ? "Now" : update_time(item.dt)}
          </div>
          <div
            style={{
              fontSize: "2rem",
              color: "blue",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            {parseInt(item.temp - 273.15)}&#176;
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            // height="50px"
          />
          <div style={{ fontSize: "larger", marginTop: "10px" }}>
            {item.clouds}%
            <img
              height="1rem"
              src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
              // style={{ transform: "rotateX(45)" }}
            />
          </div>
        </div>
      </Grid>
    );
  });
};

const Hour = () => {
  const { isLoading, final_res } = useWeatherData();
  const navigate = useNavigate();

  if (!isLoading) {
    return (
      <Grid container marginBottom="1.3rem">
        <Grid
          item
          xs={12}
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            margin: "1.3rem",
            marginBottom: "1.3rem",
          }}
        >
          Hourly Forecast
        </Grid>

        {/* <Grid item xs={1} */}
        <Grid item xs={12}>
          <Grid container>
            <Det data={final_res.hourly.slice(0, 6)} />
          </Grid>
        </Grid>

        <Grid item xs={12} marginTop="-2rem" marginBottom="1.3rem">
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
            View More
          </Button>
        </Grid>
      </Grid>
    );
  }
};

export default Hour;
