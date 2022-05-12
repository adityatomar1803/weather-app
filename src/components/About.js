import { Grid } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";

const About = () => {
  console.log("into aboutus");
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10} md={7} backgroundColor="white">
        <h2>About Us</h2>
        About us Section
      </Grid>
    </Grid>
  );
};

export default About;
