import React, { createContext, useContext, useEffect, useState } from "react";
import { appid } from "../helper/Keys";

const WeatherContext = createContext();

export const WeatherProvider = ({ city, children }) => {
  const [final_res, setFinal] = useState({});
  const [pollution_data, setPollutionData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("weather.context::useEffect", city);

    var demo_city = city.split(",", 2)[0];
    var country = city.split(",", 2)[1];

    var url_lat = `http://api.openweathermap.org/geo/1.0/direct?q=${demo_city},${country}&limit=1&appid=${appid}`;

    var lat = "";
    var lon = "";

    fetch(url_lat)
      .then((res) => res.json())
      .then((res) => {
        // console.log(
        //   "weather.context.js: lat n lon :",
        //   res[0]["lat"],
        //   res[0]["lon"]
        // );
        lat = res[0]["lat"];
        lon = res[0]["lon"];
        return fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${appid}`
        );
      })
      .then((res) => res.json())
      .then((res) => {
        // console.log("weather.context:: second API result in json format", res);
        setFinal(res);
        return fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${appid}`
        );
      })
      .then((res) => res.json())
      .then((res) => {
        // console.log("weather.context:: third API result in json format", res);
        setPollutionData(res);
        setIsLoading(false);
      });

    return () => {
      <div>aditya</div>;
    };
  }, [city]);

  return (
    <WeatherContext.Provider value={{ final_res, isLoading, pollution_data }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherData = () => useContext(WeatherContext);
