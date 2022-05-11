// import logo from './logo.svg';
import "./App.css";
import MainComponent from "./components/MainComponent";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { BrowserRouter } from "react-router-dom";

// import DonutChart from "react-donut-chart";
// import { Pie } from "react-chartjs-2/dist/index";
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
