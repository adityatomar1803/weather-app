import React from "react";
import { Grid } from "@mui/material";
import OverView from "./OverView";
import AirQuality from "./AirQuality";
import Today from "./Today";
import Details from "./Details";
import Hour from "./Hour";
import Day from "./Day";

const Home = ({ city }) => {
  return (
    <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
      <Grid item sm={12} md={7}>
        <OverView city={city} />
      </Grid>
      <Grid item sm={12} md={3}>
        <AirQuality />
      </Grid>

      <Grid
        item
        sm={12}
        md={7}
        backgroundColor="white"
        marginBottom="10px"
        marginTop="15px"
        borderRadius="10px"
      >
        <Today city={city} />
      </Grid>
      <Grid
        item
        sm={12}
        md={7}
        backgroundColor="white"
        marginBottom="10px"
        marginTop="15px"
        borderRadius="10px"
      >
        <Details city={city} />
      </Grid>

      <Grid
        item
        sm={12}
        md={7}
        backgroundColor="white"
        marginBottom="10px"
        marginTop="15px"
        borderRadius="10px"
      >
        <Hour />
      </Grid>
      <Grid
        item
        sm={12}
        md={7}
        backgroundColor="white"
        marginBottom="10px"
        marginTop="15px"
        borderRadius="10px"
      >
        <Day />
      </Grid>
    </Grid>
  );
};

export default Home;
