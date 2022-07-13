import React, { useState } from "react";
import { createFilterOptions, Grid } from "@mui/material";
import { Autocomplete } from "@mui/material";
import logo from "../../data/logo.png";
import { TextField } from "@mui/material";
import { useWeatherData } from "../../context/weather.context";
import { CustomLink } from "./MainNavigation";

import { useNavigate } from "react-router-dom";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";

const Navigation = ({ data_city, finalCity, city, blackTheme, setTheme }) => {
  const { isLoading, final_res, setIsLoading } = useWeatherData();

  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const [value, setValue] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const finalCityUsage = (d) => {
    // console.log("Navigation: finalCityUsage", d);
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
        backgroundColor={blackTheme ? "black" : "white"}
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
          <div
            className="city-data"
            style={{ color: blackTheme ? "white" : "black" }}
          >
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
        </Grid>
        <Grid item xs={6} sm={3} md={1} className="Refresh">
          <div
            className={blackTheme ? "nav-item-black" : "nav-item"}
            onClick={() => {
              setIsLoading(true);
              setValue((prev) => "Delhi, India");
              setTimeout(() => {
                setValue((prev) => inputValue);
                setIsLoading(false);
              }, 1500);
              console.log("between executed");

              // setValue((prev) => inputValue);
            }}
          >
            <span className="material-icons">refresh</span>
            Refresh
          </div>
        </Grid>
        <Grid item xs={4} sm={3} md={1} className="Theme">
          <div
            className={blackTheme ? "nav-item-black" : "nav-item"}
            onClick={() => setTheme(!blackTheme)}
          >
            <span className="material-icons">dark_mode</span> Theme
          </div>
        </Grid>

        <Grid item xs={4} sm={3} marginBottom="0.1rem">
          <div>
            <Autocomplete
              className="auto-complete"
              id="controlled-demo"
              // disableUnderline={true}
              autoHighlight
              options={data_city}
              filterOptions={filterOptions}
              size="small"
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
                  variant="filled"
                  fullWidth
                  color="primary"
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
