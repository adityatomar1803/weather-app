import { Grid } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";

const About = () => {
  // console.log("into aboutus");
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10} md={7} backgroundColor="white">
        <h2>About Us</h2>

        <b>WeatherOrg</b>

        <p>
          Our world weather forecast service is a unique and intelligent online
          resource designed to provide weather related information in a highly
          customizable format that is both easy to read and analyze. It was
          developed by a team of devotees aimed at providing uncluttered,
          friendly and loyal service.{" "}
        </p>

        <b>What makes us different?</b>

        <p>
          One of the key features of our service is the ability to adjust
          appearance as well as layout of the page components. Users can select
          to display only the most relevant blocks of information according to
          their search criteria, hence allowing pages to load faster while
          reducing network traffic.
        </p>

        <p>
          At present moment our weather forecast service is the only resource
          with such capabilities.
        </p>

        <b>Technology</b>

        <p>
          We use our proprietary processing technology when working with data
          provided by Foreca.com, Openweathermap.org.
        </p>
      </Grid>
    </Grid>
  );
};

export default About;
