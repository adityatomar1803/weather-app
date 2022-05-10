import React from "react";
import { Grid } from "@mui/material";
import { DailyCard } from "../cards/DailyCard";
import { HourlyCard } from "../cards/HourlyCard";
import Home from "../overview-front/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useResolvedPath,
  useMatch,
} from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          display: "block",
          borderBottom: match ? "2px solid white" : "none",
          paddingBottom: "10px",
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
  return (
    <Router>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        padding={"5px"}
        backgroundColor={"#0E2333"}
      >
        <Grid item md={2} sm={2}>
          <CustomLink to="/" className="Link">
            Today
          </CustomLink>
        </Grid>
        <Grid item md={2} sm={2}>
          <CustomLink to="/hourly" className="Link">
            Hourly
          </CustomLink>
        </Grid>
        <Grid item md={2} sm={2}>
          <CustomLink to="/weekly" className="Link">
            Weekly
          </CustomLink>
        </Grid>
        <Grid item md={2} sm={2}>
          <CustomLink to="/statistics" className="Link">
            Statistics
          </CustomLink>
        </Grid>
        <Grid item md={2} sm={2} className="Link">
          Maps
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
