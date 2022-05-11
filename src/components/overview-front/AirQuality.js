import { Button, Card, Grid } from "@mui/material";
import React from "react";
import { useWeatherData } from "../../context/weather.context";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";

import { Doughnut } from "react-chartjs-2";

Chart.register(Tooltip, Title, ArcElement, Legend);

const AirQuality = () => {
  const { isLoading, pollution_data } = useWeatherData();
  const navigate = useNavigate();

  var color_ = "";
  var pm2_5 = "";
  var comment = "";
  var advice = "";
  var data = {};

  if (!isLoading) {
    pm2_5 = parseInt(pollution_data.list[0].components.pm2_5);

    if (pm2_5 > 0 && pm2_5 <= 15) {
      color_ = "green";
      comment = "Good";
      advice = "Minimal Impact";
    } else if (pm2_5 > 15 && pm2_5 <= 30) {
      color_ = "#9acd32";
      comment = "Fair";
      advice = "May cause minor breathing difficulties in sensitive people.";
    } else if (pm2_5 > 30 && pm2_5 <= 55) {
      color_ = "yellow";
      advice =
        "May cause breathing difficulties in people with lung disease like asthma, and discomfort to people with heart disease, children and older adults.";
      comment = "Moderate";
    } else if (pm2_5 > 55 && pm2_5 <= 110) {
      advice =
        "May cause respiratory illness in people on prolonged exposure. Effect may be more pronounced in people with lung and heart diseases.";
      color_ = "orange";
      comment = "Poor";
    } else if (pm2_5 > 110) {
      advice =
        "May cause respiratory issues in healthy people, and serious health issues in people with lung/heart disease. Difficulties may be experienced even during light physical activity.";
      color_ = "red";
      comment = "Very Poor";
    }

    data = {
      labels: ["pm2.5 "],
      datasets: [
        {
          label: "My First Dataset",
          data: [pm2_5, 120 - pm2_5],
          backgroundColor: [color_, "wheat"],
          hoverOffset: 4,
        },
      ],
    };

    console.log(
      "the data, pm2_5, color and comment is",
      data,
      pm2_5,
      color_,
      comment
    );

    return (
      <Grid
        container
        // style={{
        //   width: "21%",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        // }}
        backgroundColor="white"
        className="card"
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="div"
            textAlign={"center"}
            marginBottom={"15px"}
            marginTop="20px"
          >
            Air Quality Index
          </Typography>
        </Grid>

        <Grid
          item
          xs={3}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <div> */}
          <div style={{ width: "35%" }}>
            <Doughnut
              data={data}
              options={{
                cutout: "69%",
                radius: "100%",

                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          textAlign={"center"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize={"20px"}
        >
          {comment}
        </Grid>

        <Grid item xs={12} margin="15px" marginTop="20px">
          {advice}
        </Grid>

        <Grid item xs={12} marginTop="10px" marginBottom="20px">
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              fontSize: "small",
              padding: "8px",
              // marginRight: "auto",
            }}
            onClick={() => {
              return navigate("/air");
            }}
          >
            See details
          </Button>
        </Grid>
      </Grid>
    );
  }
};

export default AirQuality;
