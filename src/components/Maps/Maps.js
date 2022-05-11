import React from "react";
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

  let center = [final_res.lat, final_res.lon];
  let marker = [final_res.lat, final_res.lon];
  // const fillBlueOptions = { fillColor: "blue" };
  // const fillRedOptions = { fillColor: "red" };
  // const greenOptions = { color: "green", fillColor: "green" };

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
          md={7}
          marginTop="20px"
          marginBottom="20px"
          position="relative"
        >
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              zIndex: "10000",
            }}
          >
            sadvf
          </div>
          <MapContainer
            center={center}
            zoom={2}
            scrollWheelZoom={true}
            className="Map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <TileLayer
              attribution='&copy; <a href="https://www.openweathermap.org">Weather from OpenWeatherMap</a> contributors'
              url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=e816dd76c2a342a9f38f34843d0a039d"
            />
            {/* <div style={{ position: "absolute", zIndex: "1" }}>erwtrh</div> */}
            <Marker position={marker}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
        <Grid item sm={12}>
          dfv
        </Grid>
      </Grid>
    );
  }
};

export default Maps;
