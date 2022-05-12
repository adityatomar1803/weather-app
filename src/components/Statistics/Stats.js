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
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxHeight: 1,
      },
      // paddingTop: "10px",
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
      <div>
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            width: "800px",
            // height: "400px",
            left: "20%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Line data={data_hourly} options={options} />
        </div>

        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            width: "800px",
            // height: "400px",
            left: "20%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Line data={data_daily} options={options} />
        </div>
      </div>
    );
  }
};

export default Stats;
