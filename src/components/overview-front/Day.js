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
      >
        <div>
          <div style={{ fontSize: "larger", marginBottom: "15px" }}>
            {i === 1 ? "Now" : update_time(item.dt)}
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "blue",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            <div style={{ fontSize: "25px" }}>
              {parseInt(item.temp.max - 273.15)}&#176;
            </div>
            <div style={{ fontSize: "25px" }}>
              {parseInt(item.temp.min - 273.15)}&#176;
            </div>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            // height="50px"
          />
          <div style={{ fontSize: "larger", marginTop: "10px" }}>
            {item.clouds}%
            <img
              height="15px"
              src="https://img.icons8.com/external-prettycons-flat-prettycons/47/4a90e2/external-raindrops-weather-prettycons-flat-prettycons.png"
              // style={{ transform: "rotateX(45)" }}
            />
          </div>
        </div>
      </Grid>
    );
  });
};

const Day = () => {
  const { isLoading, final_res } = useWeatherData();
  const navigate = useNavigate();

  if (!isLoading) {
    return (
      <Grid container marginBottom="20px">
        <Grid
          item
          xs={12}
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            margin: "20px",
            marginBottom: "20px",
          }}
        >
          Daily Forecast
        </Grid>

        {/* <Grid item xs={1} */}
        <Grid item xs={12}>
          <Grid container>
            <Det data={final_res.daily.slice(0, 6)} />
          </Grid>
        </Grid>

        <Grid item xs={12} marginTop="35px" marginBottom="20px">
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              fontSize: "small",
              padding: "8px",
              // marginRight: "auto",
            }}
            onClick={() => {
              return navigate("/weekly");
            }}
          >
            View More
          </Button>
        </Grid>
      </Grid>
    );
  }
};

export default Day;
