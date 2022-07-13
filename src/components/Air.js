import React from "react";
import { Grid } from "@mui/material";
import { useWeatherData } from "../context/weather.context";

const Air = ({ city }) => {
  const { isLoading, pollution_data } = useWeatherData();
  //this is just for demo
  if (!isLoading) {
    return (
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={7}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            backgroundColor="white"
            borderRadius="20px"
            margin="20px 0px 20px 0px"
          >
            <Grid
              item
              xs={12}
              fontSize="25px"
              fontWeight="bold"
              margin="15px 0px 15px 0px"
            >
              Air Pollution Data -{" "}
              <div style={{ fontSize: "20px", fontWeight: "normal" }}>
                {city}
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className="air-grid-item"
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 10px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>CO </div>
              <div>{pollution_data.list[0].components.co} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 10px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>NO</div>
              <div>{pollution_data.list[0].components.no} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 10px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>
                NO<sub>2</sub>
              </div>
              <div>{pollution_data.list[0].components.no2} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 10px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>
                O<sub>3</sub>
              </div>
              <div>{pollution_data.list[0].components.o3} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 10px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>
                SO<sub>2</sub>
              </div>
              <div>{pollution_data.list[0].components.so2} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 10px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>
                PM<sub>2.5</sub>
              </div>
              <div>{pollution_data.list[0].components.pm2_5} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 20px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>
                PM<sub>10</sub>
                {/* PM 10 */}
              </div>
              <div>{pollution_data.list[0].components.pm10} μg/m3</div>
              {/* </div> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-evenly"
              margin="10px 0px 20px 0px"
              fontSize="large"
              fontWeight="bold"
              backgroundColor="aliceblue"
            >
              {/* <div> */}
              <div>
                NH<sub>3</sub>
              </div>
              <div>{pollution_data.list[0].components.nh3} μg/m3</div>
              {/* </div> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default Air;
