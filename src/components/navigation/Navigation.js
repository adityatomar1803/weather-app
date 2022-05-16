import React, { useState } from "react";
import { createFilterOptions, Grid, Button } from "@mui/material";
import { Autocomplete } from "@mui/material";
import logo from "../../data/logo.png";
import { TextField } from "@mui/material";
import { useWeatherData } from "../../context/weather.context";
import { CustomLink } from "./MainNavigation";

import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";

import { createTheme } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

const theme = createTheme({
  palette: {
    light: "#FFFFFF",
  },
});

const Navigation = ({ data_city, finalCity, city }) => {
  const { isLoading, final_res } = useWeatherData();

  const [toggle, setToggle] = useState(false);
  console.log("toggle is ", toggle);
  // const [refresh, setRefresh] = useState(false);
  console.log("re-entered");

  const navigate = useNavigate();

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
        // backgroundColor="#326A84"
        // color="black"
        // backgroundColor="white"
        className="TopNavbar"
        alignItems={"center"}
        marginTop="-1rem"
        marginLeft="-1rem"
      >
        <Grid item xs={2} sm={2} md={1}>
          <div
            onClick={() => {
              return navigate("/");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <img className="logo" src={logo} alt="logo" />
          </div>
        </Grid>
        <Grid item xs={4} sm={3} md={3}>
          <div className="city-data">
            <span>{city}</span>
            <span style={{ marginLeft: "10px" }}>
              {parseInt(final_res.current.temp - 273.15)}
            </span>
            &#8451;
            <img
              className="jus"
              src={`http://openweathermap.org/img/wn/${final_res.current.weather[0].icon}@2x.png`}
              height="50px"
              alt="ico-img"
            />
          </div>
          {/* city data */}
        </Grid>
        <Grid item xs={6} sm={3} md={1} className="Refresh">
          <div
            className="nav-item"
            onClick={() => {
              setValue(inputValue);
            }}
          >
            <span className="material-icons">refresh</span>
            {/* <span></span> */}
            Refresh
          </div>
        </Grid>
        <Grid item xs={4} sm={3} md={1} className="Theme">
          <div className="nav-item">
            <span className="material-icons">dark_mode</span> Theme
          </div>
        </Grid>

        <Grid item xs={4} sm={3}>
          {/* <div className="material-icons">search</div> */}
          <div>
            <Autocomplete
              // sx={{ marginTop: "5px" }}
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
                <TextField
                  {...params}
                  label="Enter city"
                  variant="standard"

                  // marginTop="10px"
                />
              )}
            />
          </div>
        </Grid>

        <Grid item xs={2} className="IconThreeLines">
          <div onClick={() => setToggle(!toggle)}>
            <span className="material-icons">menu</span>
          </div>
        </Grid>

        {toggle && (
          <Grid
            className="toggleStyle"
            container
            justifyContent={"center"}
            alignItems={"center"}
            padding={"0.2rem"}
            paddingTop={"0.5rem"}
            backgroundColor={"#0E2333"}
          >
            <Grid item xs={12}>
              <CustomLink
                to="/"
                className="Link"
                onClick={() => setToggle(!toggle)}
              >
                Today
              </CustomLink>
            </Grid>
            <Grid item xs={12}>
              <CustomLink
                to="/hourly"
                className="Link"
                onClick={() => setToggle(!toggle)}
              >
                Hourly
              </CustomLink>
            </Grid>
            <Grid item xs={12}>
              <CustomLink
                to="/weekly"
                className="Link"
                onClick={() => setToggle(!toggle)}
              >
                Weekly
              </CustomLink>
            </Grid>
            <Grid item xs={12}>
              <CustomLink
                to="/stats"
                className="Link"
                onClick={() => setToggle(!toggle)}
              >
                Statistics
              </CustomLink>
            </Grid>
            <Grid item xs={12}>
              <CustomLink
                to="/maps"
                className="Link"
                onClick={() => setToggle(!toggle)}
              >
                Maps
              </CustomLink>
            </Grid>
            <Grid item xs={12}>
              <CustomLink
                to="/air"
                className="Link"
                onClick={() => setToggle(!toggle)}
              >
                Air Quality
              </CustomLink>
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  } else {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="success" />
      </Backdrop>
    );
  }
};

export default Navigation;
