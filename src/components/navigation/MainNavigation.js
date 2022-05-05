import React from "react";
import { Grid } from "@mui/material";
import DailyCard from "../cards/DailyCard";
import { HourlyCard } from "../cards/HourlyCard";
import Home from "../overview-front/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const MainNavigation = ({ city }) => {
  return (
    <Router>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={"5px"}
        backgroundColor={"#0E2333"}
      >
        <Grid item md={2} sm={2} className="main_navigation_item">
          <Link to="/" className="Link">
            Today
          </Link>
        </Grid>
        <Grid item md={2} sm={2} className="main_navigation_item">
          <Link to="/hourly" className="Link">
            Hourly
          </Link>
        </Grid>
        <Grid item md={2} sm={2} className="main_navigation_item">
          <Link to="/weekly" className="Link">
            Weekly
          </Link>
        </Grid>
        <Grid item md={2} sm={2} className="main_navigation_item">
          <Link to="/statistics" className="Link">
            Statistics
          </Link>
        </Grid>
        <Grid item md={2} sm={2} className="main_navigation_item">
          aise hi
        </Grid>
      </Grid>
      <Routes>
        <Route exact path="/" element={<Home city={city} />} />
        <Route exact path="/hourly" element={<HourlyCard city={city} />} />
        <Route exact path="/weekly" element={<DailyCard city={city} />} />
      </Routes>
    </Router>
  );
};

export default MainNavigation;
