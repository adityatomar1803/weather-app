import React, { Suspense, useEffect, useState } from "react";
import Navigation from "./navigation/Navigation";
import { WeatherProvider } from "../context/weather.context";
import MainNavigation from "./navigation/MainNavigation";
// import Footer from "./Footer";
const Footer = React.lazy(() => import("./Footer"));

const MainComponent = () => {
  const [citiess, setCities] = useState([]);
  const [selected_city, setCity] = useState(null);
  const [blackTheme, setTheme] = useState(false);

  useEffect(() => {
    getCities();
  }, []);

  const finalCity = (selected) => {
    setCity(selected);
    // console.log("Main Component: selected_city", selected_city);
  };

  const getCities = () => {
    // console.log("Main Component: inside getCities");
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
    <div style={{ backgroundColor: blackTheme ? "black" : "" }}>
      <WeatherProvider city={selected_city || "Delhi, India"}>
        <Navigation
          data_city={citiess}
          finalCity={finalCity}
          city={selected_city || "Delhi, India"}
          blackTheme={blackTheme}
          setTheme={setTheme}
        />
        <MainNavigation
          city={selected_city || "Delhi, India"}
          blackTheme={blackTheme}
        />
        <Suspense fallback={<div>loading...</div>}>
          <Footer blackTheme={blackTheme}/>
        </Suspense>
      </WeatherProvider>
    </div>
  );
};

export default MainComponent;
