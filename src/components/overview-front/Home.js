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
        <OverView city={city} boxShadow="0px 0px 18px #888888" />
      </Grid>

      <Grid
        item
        xs={10}
        md={3}
        boxShadow="0px 5px 18px #888888"
        marginTop="1rem"
        borderRadius="1rem"
        backgroundColor="white"
      >
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
        borderRadius="1rem"
        boxShadow="0px 5px 18px #888888"
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
        boxShadow="0px 5px 18px #888888"
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
        boxShadow="0px 5px 18px #888888"
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
        boxShadow="0px 5px 18px #888888"
      >
        <Day />
      </Grid>
    </Grid>
  );
};

export default Home;
