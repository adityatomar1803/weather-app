import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";
import { Grid } from "@mui/material";
import { useWeatherData } from "../../context/weather.context";

const Maps = () => {
  const { isLoading, final_res } = useWeatherData();

  const [tempCheck, settempCheck] = useState(false);
  const [windCheck, setwindCheck] = useState(false);
  const [cloudCheck, setcloudCheck] = useState(false);
  const [rainCheck, setrainCheck] = useState(false);
  const [snowCheck, setsnowCheck] = useState(false);
  const [pressureCheck, setpressureCheck] = useState(false);

  console.log(tempCheck, windCheck, cloudCheck, rainCheck);

  // const negateTemp = () => {
  //   settempCheck(!tempCheck);
  // };

  let center = [final_res.lat, final_res.lon];
  let marker = [final_res.lat, final_res.lon];

  if (isLoading) {
    <div>Loading...</div>;
  } else {
    center = [final_res.lat, final_res.lon];
    marker = [final_res.lat, final_res.lon];
    return (
      <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
        <Grid
          item
          xs={12}
          // md={9}
          // marginTop="20px"
          marginBottom="1.5rem"
          position="relative"
        >
          <div
            style={{
              backgroundColor: "white",
              // fontSize: "0.5rem",
              position: "absolute",
              right: "3%",
              top: "10%",
              zIndex: "10000",
              paddingLeft: "0.6rem",
              // paddingRight: "0rem",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={tempCheck}
                    onChange={() => settempCheck(!tempCheck)}
                  />
                }
                label={<span style={{ fontSize: "0.9rem" }}>Temperature</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={windCheck}
                    onChange={() => setwindCheck(!windCheck)}
                  />
                }
                label={<span style={{ fontSize: "0.9rem" }}>Wind</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={cloudCheck}
                    onChange={() => setcloudCheck(!cloudCheck)}
                  />
                }
                label={<span style={{ fontSize: "0.9rem" }}>Clouds</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={rainCheck}
                    onChange={() => setrainCheck(!rainCheck)}
                  />
                }
                label={<span style={{ fontSize: "0.9rem" }}>Rain</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={snowCheck}
                    onChange={() => setsnowCheck(!snowCheck)}
                  />
                }
                label={<span style={{ fontSize: "0.9rem" }}>Snow</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={pressureCheck}
                    onChange={() => setpressureCheck(!pressureCheck)}
                  />
                }
                label={<span style={{ fontSize: "0.9rem" }}>Pressure</span>}
              />
            </FormGroup>
          </div>

          <div
            style={{
              position: "absolute",
              right: "3%",
              bottom: "5%",
              zIndex: "10000",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              // src="/src/data/Legend/temperatureLengent.png"
              className={tempCheck ? "TempLegend" : ""}
              style={{
                marginBottom: "10px",
                zIndex: "10000",
                paddingBottom: "0.5rem",
                height: "1rem",
                width: "22rem",
                paddingRight: "1.5rem",
              }}
            ></div>

            <div
              className={windCheck ? "WindLegend" : ""}
              style={{
                paddingBottom: "0.5rem",
                height: "1rem",
                width: "22rem",
                paddingRight: "1.5rem",
                marginBottom: "10px",
              }}
            ></div>

            <div
              className={cloudCheck ? "CloudLegend" : ""}
              style={{
                paddingBottom: "0.5rem",
                height: "1rem",
                width: "22rem",
                paddingRight: "1.5rem",
                marginBottom: "10px",
              }}
            ></div>

            <div
              className={rainCheck ? "PrecLegend" : ""}
              style={{
                paddingBottom: "0.5rem",
                height: "1rem",
                width: "22rem",
                paddingRight: "1.5rem",
                marginBottom: "10px",
              }}
            ></div>

            <div
              className={pressureCheck ? "PressureLegend" : ""}
              style={{
                paddingBottom: "0.5rem",
                height: "1rem",
                width: "22rem",
                paddingRight: "1.5rem",
                marginBottom: "10px",
              }}
            ></div>
          </div>

          <MapContainer
            center={center}
            zoom={3}
            scrollWheelZoom={true}
            className="Map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {tempCheck && (
              <TileLayer
                attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
                url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
              />
            )}

            {windCheck && (
              <TileLayer
                attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
                url="https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
              />
            )}

            {cloudCheck && (
              <TileLayer
                attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
                url="https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
              />
            )}

            {rainCheck && (
              <TileLayer
                attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
                url="https://tile.openweathermap.org/map/rain_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
              />
            )}

            {pressureCheck && (
              <TileLayer
                attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
                url="https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
              />
            )}
            {snowCheck && (
              <TileLayer
                attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
                url="https://tile.openweathermap.org/map/snow_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
              />
            )}

            <Marker position={marker}>
              <Popup>
                {tempCheck ? (
                  <span>
                    {" "}
                    {parseInt(final_res.current.temp - 273.15)} &#176; C{" "}
                  </span>
                ) : pressureCheck ? (
                  final_res.current.pressure + " hP"
                ) : cloudCheck || rainCheck ? (
                  final_res.current.clouds + "%"
                ) : windCheck ? (
                  final_res.current.wind_speed + " kmph"
                ) : (
                  <span>
                    {parseInt(final_res.current.temp - 273.15)} &#176; C{" "}
                  </span>
                )}
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    );
  }
};

export default Maps;
