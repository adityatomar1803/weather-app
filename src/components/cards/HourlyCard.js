import { Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import { update_time } from "../../helper/Helper";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Button } from "@mui/material";

const MinuteDetails = ({ item }) => {
  return (
    <Grid
      container
      border="1px solid #d4d4d5"
      marginBottom="10px"
      borderRadius="10px"
    >
      <Grid item xs={4} display="block ruby" margin="15px 0px 15px 0px">
        {/* <div> */}
        <img
          height="30px"
          src="https://img.icons8.com/color/48/000000/hot.png"
        />
        {/* </div> */}
        <div>
          <div>Feels Like</div>
          <div>{item.feels_like}&#176;</div>
        </div>
      </Grid>
      <Grid item xs={4} display="block ruby" margin="15px 0px 15px 0px">
        <img
          height="30px"
          src="https://img.icons8.com/color/48/000000/wind.png"
        />
        <div>
          <div>Wind</div>
          <div>{item.wind_speed}</div>
        </div>
      </Grid>
      <Grid item xs={4} display="block ruby" margin="15px 0px 15px 0px">
        <img
          height="30px"
          src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png"
        />
        <div>
          <div>Humidity</div>
          <div>{item.humidity}</div>
        </div>
      </Grid>
      <Grid item xs={4} display="block ruby" margin="15px 0px 15px 0px">
        <img
          height="30px"
          src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-uv-index-weather-justicon-lineal-color-justicon.png"
        />
        <div>
          <div>UVI</div>
          <div>{item.uvi}</div>
        </div>
      </Grid>
      <Grid item xs={4} display="block ruby" margin="15px 0px 15px 0px">
        <img
          height="30px"
          src="https://img.icons8.com/cute-clipart/64/000000/cloud.png"
        />
        <div>
          <div>Cloud Cover</div>
          <div>{item.clouds}</div>
        </div>
      </Grid>
      <Grid item xs={4} display="block ruby" margin="15px 0px 15px 0px">
        <img
          height="30px"
          src="https://img.icons8.com/color/48/000000/pressure.png"
        />

        <div>
          <div>Pressue</div>
          <div>{item.pressure}</div>
        </div>
      </Grid>
    </Grid>
  );
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Accordian = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  var t = update_time(item.dt);
  const date = new Date(item.dt * 1000);

  return (
    <Grid
      container
      alignItems="center"
      borderBottom="1px solid #d4d4d5"
      justifyContent="space-evenly"
    >
      <Grid item xs={1} textAlign="end">
        {t}
      </Grid>
      <Grid item xs={2} fontSize="23px" fontWeight="bold">
        {parseInt(item.temp - 273.15)}&#176;
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

      {t === "23:30" ? (
        <Grid
          item
          xs={12}
          padding="15px"
          fontSize="larger"
          fontWeight="bold"
          borderTop="1px solid #d4d4d5"
        >
          {months[date.getMonth()] +
            " " +
            (date.getDate() + 1) +
            ", " +
            date.getFullYear()}
        </Grid>
      ) : (
        ""
      )}
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
              Hourly Weather -{" "}
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
            {<DisplayData data={final_res.hourly} />}
          </div>
        </Grid>
      </Grid>
    );
  } else {
    <div>Loading</div>;
  }
};
