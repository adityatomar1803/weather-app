import React, { useState } from "react";
import { createFilterOptions, Grid } from "@mui/material";
import { Autocomplete } from "@mui/material";
import logo from "../../data/logo.png";
import { TextField } from "@mui/material";
import { useWeatherData } from "../../context/weather.context";

const Navigation = ({ data_city, finalCity, city }) => {
  const { isLoading, final_res } = useWeatherData();

  const [value, setValue] = useState("");

  const [inputValue, setInputValue] = useState("");

  const finalCityUsage = (d) => {
    console.log("Navigation: finalCityUsage", d);
    finalCity(d);
  };

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 5,
  });

  if (!isLoading) {
    return (
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        backgroundColor="#326A84"
        alignItems={"center"}
      >
        <Grid item xs={6} md={1}>
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div className="city-data">
            <span>{city}</span>
            <span style={{ marginLeft: "10px" }}>
              {parseInt(final_res.current.temp - 273.15)}
            </span>
            &#8451;
            <img
              src={`http://openweathermap.org/img/wn/${final_res.current.weather[0].icon}@2x.png`}
              height="50px"
              alt="ico-img"
            />
          </div>
          {/* city data */}
        </Grid>
        <Grid item xs={6} md={1}>
          <div className="nav-item">
            <span className="material-icons">refresh</span>
            {/* <span></span> */}
            Refresh
          </div>
        </Grid>
        <Grid item xs={6} md={1}>
          <div className="nav-item">
            <span className="material-icons">dark_mode</span> Theme
          </div>
        </Grid>

        <Grid item xs={12} md={3} paddingBottom="17px">
          {/* <div className="material-icons">search</div> */}
          <div>
            <Autocomplete
              className="auto-complete"
              id="controlled-demo"
              options={data_city}
              filterOptions={filterOptions}
              value={value}
              onChange={(_, newValue) => {
                finalCityUsage(newValue);
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Enter city" variant="standard" />
              )}
            />
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Navigation;
