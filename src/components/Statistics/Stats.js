import React from "react";
import { useWeatherData } from "../../context/weather.context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";
import { update_time, update_date } from "../../helper/Helper";
// import { borderBottom } from "@mui/system";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxHeight: 1,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      // ticks: {
      //   callback: function (val, index) {
      //     return index % 2 ? "" : this.getLabelForValue(val);
      //   },
      // },
    },
  },
};

const Stats = () => {
  const { final_res, isLoading } = useWeatherData();

  if (isLoading) {
  } else {
    // const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const labels_hourly = final_res.hourly
      .slice(0, 24)
      .map((item) => update_time(item.dt));

    const temp_data_hourly = final_res.hourly
      .slice(0, 24)
      .map((item) => parseInt(item.temp - 273.15));
    // var i = 0;

    const data_hourly = {
      labels: labels_hourly,
      datasets: [
        {
          label: "Temperature",
          data: temp_data_hourly,
          // data: labels.map(() => i++),
          borderColor: "red",
          backgroundColor: "red",
        },
      ],
    };

    const labels_daily = final_res.daily.map((item) => update_date(item));

    const temp_data_daily_day = final_res.daily.map((item) =>
      parseInt(item.temp.day - 273.15)
    );
    const temp_data_daily_night = final_res.daily.map((item) =>
      parseInt(item.temp.night - 273.15)
    );
    const temp_data_daily_morning = final_res.daily.map((item) =>
      parseInt(item.temp.morn - 273.15)
    );
    const temp_data_daily_evening = final_res.daily.map((item) =>
      parseInt(item.temp.eve - 273.15)
    );

    const data_daily = {
      labels: labels_daily,
      datasets: [
        {
          label: "Day",
          data: temp_data_daily_day,
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: "Night",
          data: temp_data_daily_night,
          borderColor: "blue",
          backgroundColor: "purple",
        },
        {
          label: "Morning",
          data: temp_data_daily_morning,
          borderColor: "orange",
          backgroundColor: "blue",
        },
        {
          label: "Evening",
          data: temp_data_daily_evening,
          borderColor: "green",
          backgroundColor: "green",
        },
      ],
    };

    return (
      <div
        style={{
          display: "Grid",
          justifyContent: "center",
          backgroundColor: "white",
          marginTop: "1.4rem",
          marginBottom: "1.4rem",
        }}
      >
        <div
          style={{
            padding: "1.4rem",
          }}
        >
          <span style={{ marginBotton: "1.4rem", fontSize: "large" }}>
            Temperature Fluctuations for next 24 hours
          </span>

          <div
            className="stats"
            style={
              window.screen.width > 900
                ? {
                    position: "relative",
                    width: "70vw",
                  }
                : window.screen.width < 600
                ? {
                    position: "relative",
                    width: "90vw",
                  }
                : {
                    position: "relative",
                    width: "80vw",
                  }
            }
          >
            <Line data={data_hourly} options={options} />
          </div>
        </div>

        <div
          style={{
            padding: "1.4rem",
          }}
        >
          <span style={{ marginBotton: "1.4rem", fontSize: "large" }}>
            Temperature Fluctuations for next 7 days
          </span>

          <div
            className="stats"
            style={
              window.screen.width > 900
                ? {
                    position: "relative",
                    width: "70vw",
                  }
                : window.screen.width < 600
                ? {
                    position: "relative",
                    width: "90vw",
                    // height: "50vh",
                  }
                : {
                    position: "relative",
                    width: "80vw",
                  }
            }
          >
            <Line data={data_daily} options={options} />
          </div>
        </div>
      </div>
    );
  }
};

export default Stats;
