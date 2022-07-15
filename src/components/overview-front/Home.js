import React, { Suspense } from "react";
import { Grid } from "@mui/material";

// const OverView = React.lazy(() => import("./OverView"));
import OverView from "./OverView";
const AirQuality = React.lazy(() => import("./AirQuality"));
const Today = React.lazy(() => import("./Today"));
const Details = React.lazy(() => import("./Details"));
const Hour = React.lazy(() => import("./Hour"));
const Day = React.lazy(() => import("./Day"));

const Home = ({ city }) => {
  return (
    <Grid container justifyContent={"space-evenly"} alignItems={"center"}>
      <Grid item xs={10} md={7}>
        {/* <Suspense fallback={<div></div>}> */}
        <OverView city={city} boxShadow="0px 0px 18px #888888" />
        {/* </Suspense> */}
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
        <Suspense fallback={<div></div>}>
          <AirQuality />
        </Suspense>
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
        <Suspense fallback={<div></div>}>
          <Today city={city} />
        </Suspense>
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
        <Suspense fallback={<div></div>}>
          <Details city={city} />
        </Suspense>
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
        <Suspense fallback={<div></div>}>
          <Hour />
        </Suspense>
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
        <Suspense fallback={<div></div>}>
          <Day />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default Home;
