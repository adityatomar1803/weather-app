import "./App.css";
import MainComponent from "./components/MainComponent";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { BrowserRouter } from "react-router-dom";

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
