import React, { useState } from "react";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import logo from "../data/logo.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useWeatherData } from "../context/weather.context";

const Footer = () => {
  const navigate = useNavigate();

  const { isLoading } = useWeatherData();

  // console.log("entered footer");
  const [open, setOpen] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleFeedback = () => {
    setOpen(!open);
  };
  const handlePrivacy = () => {
    setPrivacy(!privacy);
  };
  const handleTerms = () => {
    setTerms(!terms);
  };

  if (!isLoading) {
    return (
      // <div>sgfd</div>
      <Grid
        container
        backgroundColor={"white"}
        justifyContent={"center"}
        alignItems="center"
        boxShadow="0px 5px 18px #888888"
        marginTop="1.5rem"
      >
        <Grid item sm={12} md={4} style={{ padding: "0.6rem" }}>
          <div
            style={{
              marginBottom: "0.6rem",
              fontSize: "larger",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Connect With Us
          </div>
          <span>
            <a
              target="_blank"
              href="https://www.facebook.com/aditya.tomar.777158/"
              rel="noreferrer"
            >
              <FacebookRoundedIcon
                color="primary"
                fontSize="large"
                className="connect-icons"
              />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/tomar_aditya_/"
              rel="noreferrer"
            >
              <Instagram
                color="error"
                fontSize="large"
                className="connect-icons"
              />
            </a>

            <a
              target="_blank"
              href="https://twitter.com/tomar_aditya_12"
              rel="noreferrer"
            >
              <Twitter
                color="primary"
                fontSize="large"
                className="connect-icons"
              />
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCb6i14LUP6_wPrBNuhjHkVA"
              rel="noreferrer"
            >
              <YouTube
                color="error"
                fontSize="large"
                className="connect-icons"
              />
            </a>
          </span>
        </Grid>

        <Grid item xs={12} md={4} className="feedback">
          <Button size="medium" onClick={handleFeedback}>
            <FeedbackIcon color="primary" fontSize="medium" />
            Feedback
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          className="footer-logo"
          style={{ flexDirection: "column", cursor: "pointer" }}
          onClick={() => {
            return navigate("/");
          }}
        >
          <img className="logo" src={logo} alt="logo" />
          <span>Weather Forecast Foremost</span>
        </Grid>

        <Grid item xs={12} marginTop="1.5rem">
          <a
            target="_blank"
            href="https://openweathermap.org/"
            rel="noreferrer"
          >
            <Button
              size="medium"
              color="secondary"
              style={{ borderRight: "4px solid", paddingRight: "1.3rem" }}
              //   className="right-border"
            >
              Weather API
            </Button>
          </a>

          <a
            target="_blank"
            href="https://weather.com/en-IN/india/news"
            rel="noreferrer"
          >
            <Button
              size="medium"
              color="secondary"
              style={{ paddingLeft: "1.3rem" }}
            >
              News Room
            </Button>
          </a>
        </Grid>

        <Grid item xs={12} marginTop="1.3rem">
          <Button
            size="medium"
            color="secondary"
            //   className="right-border"
            style={{ borderRight: "4px solid", paddingRight: "1.3rem" }}
            onClick={() => {
              return navigate("/about");
            }}
          >
            About Us
          </Button>

          <Button
            size="medium"
            color="secondary"
            //   className="right-border"
            style={{
              borderRight: "4px solid",
              paddingRight: "1.3rem",
              paddingLeft: "1.3rem",
            }}
            onClick={handleTerms}
          >
            Terms of Use
          </Button>

          <Button
            size="medium"
            color="secondary"
            //   className="right-border"

            onClick={handlePrivacy}
          >
            Privacy Policy
          </Button>
        </Grid>

        <Grid item xs={12} marginTop="2.6rem" color="darksategray">
          We recognise our responsibility to use data and technology for good.
          Take control of your data.
        </Grid>

        <Grid
          item
          xs={12}
          marginTop="0.6rem"
          marginBottom="2rem"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "darkslategray",
          }}
        >
          <CopyrightIcon fontSize="medium" />
          <i>
            <b> Copyright WeatherOrg organization est. 2022 </b>
          </i>
        </Grid>
        <Dialog open={open} onClose={handleFeedback} fullWidth>
          <DialogTitle>Send Feedback</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>Name</DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              variant="outlined"
              // variant="outlined"
            />
            {/* <DialogContentText marginTop="20px">Email</DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
            {/* <DialogContentText>Feedback</DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="feedback"
              label="feedback"
              type="feedback"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFeedback}>Cancel</Button>
            <Button onClick={handleFeedback}>Send</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={privacy} onClose={handlePrivacy} fullWidth>
          <DialogTitle>Privacy Policy </DialogTitle>
          <DialogContent>
            <DialogContentText>
              At WeatherOrg, We want to assure that We provide You, as a User,
              with information and choice about Our policies and practices. We
              do this so You may make informed decisions whether or not You want
              to use WeatherOrg Sites and how you choose to use them. Please
              read this Privacy Policy carefully before using WeatherOrg Sites.
              When You use WeatherOrg Sites, You consent to the terms and
              conditions and the practices described in this Privacy Policy. It
              applies to You if You access WeatherOrg Sites directly, through a
              third-party or by other means. It takes precedence over any
              conflicting terms published by a third party regarding Your access
              or use of WeatherOrg Sites. As WeatherOrg expands its offerings
              and as technology evolves, We may, from time to time, update Our
              privacy practices to address these changes. We encourage You to
              check here on a regular basis for updates to this Privacy Policy.
              WeatherOrg SITES, AND THE PRODUCTS, SERVICES AND ADVERTISING MADE
              AVAILABLE THROUGH THEM, ARE NOT INTENDED FOR USE BY CHILDREN UNDER
              THE AGE OF 18 WITHOUT PARENTAL SUPERVISION. WeatherOrg does not
              intentionally collect any information from children under 18 years
              of age. We will undertake to delete any details from such users
              where a parent or guardian has notified us that any such details
              have been obtained.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePrivacy}>Ok</Button>
            {/* <Button onClick={handleFeedback}>Send</Button> */}
          </DialogActions>
        </Dialog>
        <Dialog open={terms} onClose={handleTerms} fullWidth>
          <DialogTitle>Privacy Policy </DialogTitle>
          <DialogContent>
            <DialogContentText>
              The WeatherOrg site is (the "Site") is owned and operated by The
              Weather Company, LLC, an IBM Business ("WUI"). Listed below are
              the terms and conditions of use (the "Terms") for this Site. By
              using, accessing and/or viewing information on the Site, you (the
              .Participant.) agree to be bound by these Terms. If you violate
              these Terms, WUI has the right to terminate your use of the Site
              and/or take appropriate legal actions against you. We reserve the
              right to change these Terms at any time by posting on the Site.
              participant understands and agrees that its use of this Site is a
              benefit voluntarily given by WUI and that WUI may withdraw that
              benefit and rescind your participation at any time for any reason
              in its sole discretion. If you do not agree to the Terms you
              cannot use this Site or the services and information offered
              herein.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleTerms}>Ok</Button>
            {/* <Button onClick={handleFeedback}>Send</Button> */}
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
};

export default Footer;
