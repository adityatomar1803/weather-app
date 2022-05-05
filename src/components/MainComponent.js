import React, { useEffect, useState } from "react";
import Navigation from "./navigation/Navigation";
import OverView from "./overview-front/OverView";
import DailyCard from "./cards/DailyCard";
import { WeatherProvider } from "../context/weather.context";
import MainNavigation from "./navigation/MainNavigation";
import AirQuality from "./overview-front/AirQuality";
import { Grid } from "@mui/material";
import Footer from "./Footer";

const MainComponent = () => {
  const [citiess, setCities] = useState([]);
  const [selected_city, setCity] = useState(null);

  useEffect(() => {
    getCities();
  }, []);

  const finalCity = (selected) => {
    setCity(selected);
    console.log("Main Component: selected_city", selected_city);
  };

  const getCities = () => {
    console.log("Main Component: inside getCities");
    var demo_data = require("../data/final_city.json");
    var demo_cities = [];
    for (let d in demo_data) {
      if (demo_cities.includes(String(demo_data[d]["city"]))) {
      } else {
        demo_cities.push(String(demo_data[d]["city"]));
      }
    }
    setCities(demo_cities);
  };

  return (
    <WeatherProvider city={selected_city || "Delhi, India"}>
      <Navigation
        data_city={citiess}
        finalCity={finalCity}
        city={selected_city || "Delhi, India"}
      />
      <MainNavigation city={selected_city || "Delhi, India"} />

      {/* </Grid> */}
      {/* </Grid> */}
      <Footer />
    </WeatherProvider>
  );
};

export default MainComponent;
