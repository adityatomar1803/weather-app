import React, { createContext, useContext, useEffect, useState } from "react";
// import { createContext } from "use-context-selector";
// import { useContextSelector } from "use-context-selector";
// import { get_Lat_n_Lon } from "../helper/Helper";

const WeatherContext = createContext();

export const WeatherProvider = ({ city, children }) => {
  const [final_res, setFinal] = useState({});
  const [pollution_data, setPollutionData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("weather.context::useEffect", city);

    var demo_city = city.split(",", 2)[0];
    var country = city.split(",", 2)[1];

    var url_lat = `http://api.openweathermap.org/geo/1.0/direct?q=${demo_city},${country}&limit=1&appid=e816dd76c2a342a9f38f34843d0a039d`;
    // var url_main = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e816dd76c2a342a9f38f34843d0a039d`;

    // var url_pollution = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=e816dd76c2a342a9f38f34843d0a039d`
    var lat = "";
    var lon = "";

    fetch(url_lat)
      .then((res) => res.json())
      .then((res) => {
        console.log(
          "weather.context.js: lat n lon :",
          res[0]["lat"],
          res[0]["lon"]
        );
        lat = res[0]["lat"];
        lon = res[0]["lon"];
        return fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e816dd76c2a342a9f38f34843d0a039d`
          // `https://api.openweathermap.org/data/2.5/onecall?lat=${res[0]["lat"]}&lon=${res[0]["lon"]}&exclude=minutely&appid=e816dd76c2a342a9f38f34843d0a039d`
        );
      })
      .then((res) => res.json())
      .then((res) => {
        console.log("weather.context:: second API result in json format", res);
        setFinal(res);
        return fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=e816dd76c2a342a9f38f34843d0a039d`
        );
        // setIsLoading(false);
      })
      .then((res) => res.json())
      .then((res) => {
        console.log("weather.context:: third API result in json format", res);
        setPollutionData(res);
        setIsLoading(false);
      });

    return () => {
      <div>aditya</div>;
    };
  }, [city]);

  // const data = get_Lat_n_Lon(city);
  // var lat = "";
  // var lon = "";
  // // const result = "";
  // var demo = {};

  // async function getAPI1(url) {
  //   const response = await fetch(url);
  //   const res = await response.json();
  //   console.log("the res is", res);
  //   return res;
  //   // setFinal(result);
  // }

  // console.log("this is data got by weather.context about lat and lon", data);
  // data
  // .then((result) => {
  //   lat = result[0];
  //   lon = result[1];
  //   console.log("inside bhut sara", lat, lon);
  // })
  // .then(() => {
  //   console.log("second then");
  //   demo = getAPI1(url);
  //   console.log("after second then", demo);
  //   if (demo) {
  //     // setFinal(demo);
  //     setIsLoading(false);
  //   }
  //   // demo?setIsLoading(false):setIsLoading(true);
  // });
  // .then(() => setFinal(demo));

  // const data_to_be = await demo.then((res)=>res.)

  return (
    <WeatherContext.Provider value={{ final_res, isLoading, pollution_data }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherData = () => useContext(WeatherContext);
