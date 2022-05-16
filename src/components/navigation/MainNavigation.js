import React from "react";
import { Grid } from "@mui/material";
import { DailyCard } from "../cards/DailyCard";
import { HourlyCard } from "../cards/HourlyCard";
import Home from "../overview-front/Home";
import {
  Route,
  Link,
  Routes,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import Maps from "../Maps/Maps";
import Stats from "../Statistics/Stats";
import Air from "../Air";
import About from "../About";
import { useWeatherData } from "../../context/weather.context";

export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          display: "block",
          borderBottom: match ? "2px solid white" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}

const MainNavigation = ({ city }) => {
  // let  = useMatch('/');
  // console.log(useMatch("/"));
  const { isLoading } = useWeatherData();

  if (!isLoading) {
    return (
      <div>
        <div className="MainNavigation">
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            padding={"0.2rem"}
            paddingTop={"0.5rem"}
            backgroundColor={"#0E2333"}
          >
            <Grid item xs={4} sm={3} md={2}>
              <CustomLink to="/" className="Link">
                Today
              </CustomLink>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <CustomLink to="/hourly" className="Link">
                Hourly
              </CustomLink>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <CustomLink to="/weekly" className="Link">
                Weekly
              </CustomLink>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <CustomLink to="/stats" className="Link">
                Statistics
              </CustomLink>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <CustomLink to="/maps" className="Link">
                Maps
              </CustomLink>
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <CustomLink to="/air" className="Link">
                Air Quality
              </CustomLink>
            </Grid>
          </Grid>
        </div>

        <Routes>
          <Route exact path="/" element={<Home city={city} />} />
          <Route exact path="/hourly" element={<HourlyCard city={city} />} />
          <Route exact path="/weekly" element={<DailyCard city={city} />} />
          <Route exact path="/stats" element={<Stats />} />
          <Route exact path="/maps" element={<Maps />} />
          <Route exact path="/air" element={<Air city={city} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
};

export default MainNavigation;
