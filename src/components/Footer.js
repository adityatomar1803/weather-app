import React from "react";
import { Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import logo from "../data/logo.png";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    // <div>sgfd</div>
    <Grid container backgroundColor={"white"}>
      <Grid item sm={12} md={4} style={{ padding: "10px" }}>
        <div
          style={{
            marginBottom: "10px",
            fontSize: "larger",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Connect With Us
        </div>
        <span>
          <FacebookRoundedIcon
            color="primary"
            fontSize="large"
            className="connect-icons"
          />

          <Instagram color="error" fontSize="large" className="connect-icons" />

          <Twitter color="primary" fontSize="large" className="connect-icons" />
          <YouTube color="error" fontSize="large" className="connect-icons" />
        </span>
      </Grid>

      <Grid item xs={12} md={4} className="feedback">
        <Button size="medium">
          <FeedbackIcon color="primary" fontSize="medium" />
          Feedback
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        className="footer-logo"
        style={{ flexDirection: "column" }}
      >
        <img className="logo" src={logo} alt="logo" />
        <span style={{ marginTop: "10px" }}>Weather Forecast Foremost</span>
      </Grid>

      <Grid item xs={12}>
        <Button
          size="medium"
          color="secondary"
          style={{ borderRight: "4px solid", paddingRight: "20px" }}
          //   className="right-border"
        >
          Weather API
        </Button>

        <Button size="medium" color="secondary" style={{ paddingLeft: "20px" }}>
          News Room
        </Button>
      </Grid>

      <Grid item xs={12} marginTop="20px">
        <Button
          size="medium"
          color="secondary"
          //   className="right-border"
          style={{ borderRight: "4px solid", paddingRight: "20px" }}
        >
          About Us
        </Button>

        <Button
          size="medium"
          color="secondary"
          //   className="right-border"
          style={{
            borderRight: "4px solid",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Terms of Use
        </Button>

        <Button
          size="medium"
          color="secondary"
          //   className="right-border"
          style={{
            borderRight: "4px solid",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Privacy Policy
        </Button>

        <Button size="medium" color="secondary" style={{ paddingLeft: "20px" }}>
          Data Vendors
        </Button>
      </Grid>

      <Grid item xs={12} marginTop="40px" color="darksategray">
        We recognise our responsibility to use data and technology for good.
        Take control of your data.
      </Grid>

      <Grid
        item
        xs={12}
        marginTop="10px"
        marginBottom="30px"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "darkslategray",
        }}
      >
        <CopyrightIcon fontSize="medium" />
        Copyright WeatherOrg organization est. 2022
      </Grid>
    </Grid>
  );
};

export default Footer;
