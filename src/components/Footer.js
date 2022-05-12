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

const Footer = () => {
  const navigate = useNavigate();

  console.log("entered footer");
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
          <a
            target="_blank"
            href="https://www.facebook.com/aditya.tomar.777158/"
          >
            <FacebookRoundedIcon
              color="primary"
              fontSize="large"
              className="connect-icons"
            />
          </a>

          <a target="_blank" href="https://www.instagram.com/tomar_aditya_/">
            <Instagram
              color="error"
              fontSize="large"
              className="connect-icons"
            />
          </a>

          <a target="_blank" href="https://twitter.com/tomar_aditya_12">
            <Twitter
              color="primary"
              fontSize="large"
              className="connect-icons"
            />
          </a>

          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCb6i14LUP6_wPrBNuhjHkVA"
          >
            <YouTube color="error" fontSize="large" className="connect-icons" />
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
        <span style={{ marginTop: "10px" }}>Weather Forecast Foremost</span>
      </Grid>

      <Grid item xs={12}>
        <a target="_blank" href="https://openweathermap.org/">
          <Button
            size="medium"
            color="secondary"
            style={{ borderRight: "4px solid", paddingRight: "20px" }}
            //   className="right-border"
          >
            Weather API
          </Button>
        </a>

        <a target="_blank" href="https://weather.com/en-IN/india/news">
          <Button
            size="medium"
            color="secondary"
            style={{ paddingLeft: "20px" }}
          >
            News Room
          </Button>
        </a>
      </Grid>

      <Grid item xs={12} marginTop="20px">
        <Button
          size="medium"
          color="secondary"
          //   className="right-border"
          style={{ borderRight: "4px solid", paddingRight: "20px" }}
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
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
          onClick={handleTerms}
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
          onClick={handlePrivacy}
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
            PRIVACY POLICY can be embedded here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedback}>Ok</Button>
          {/* <Button onClick={handleFeedback}>Send</Button> */}
        </DialogActions>
      </Dialog>
      <Dialog open={terms} onClose={handleTerms} fullWidth>
        <DialogTitle>Privacy Policy </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Terms of Use can be embedded here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedback}>Ok</Button>
          {/* <Button onClick={handleFeedback}>Send</Button> */}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Footer;
