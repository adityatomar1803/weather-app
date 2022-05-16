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
      <Grid item xs={10} md={7}>
        <OverView city={city} />
      </Grid>
      <Grid item xs={10} md={3}>
        <AirQuality />
      </Grid>

      <Grid
        item
        xs={10}
        sm={8}
        md={7}
        backgroundColor="white"
        // marginBottom="0.6rem"
        marginTop="1.5rem"
        borderRadius="0.6rem"
      >
        <Today city={city} />
      </Grid>

      <Grid
        item
        xs={10}
        sm={8}
        md={7}
        backgroundColor="white"
        // marginBottom="0.6rem"
        marginTop="1.5rem"
        borderRadius="0.6rem"
      >
        <Details city={city} />
      </Grid>

      <Grid
        item
        xs={10}
        sm={8}
        md={7}
        backgroundColor="white"
        // marginBottom="0.6rem"
        marginTop="1.5rem"
        borderRadius="0.6rem"
      >
        <Hour />
      </Grid>
      <Grid
        item
        xs={10}
        sm={8}
        md={7}
        backgroundColor="white"
        marginBottom="0.6rem"
        marginTop="1.5rem"
        borderRadius="0.6rem"
      >
        <Day />
      </Grid>
    </Grid>
  );
};

export default Home;
