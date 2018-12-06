import React from 'react';
import ReactDOM from 'react-dom';
import BarChartContainer from "../app/component/index/BarChartContainer.jsx";
import PieChartContainer from "../app/component/index/PieChartContainer.jsx";
import LineChartContainer from "../app/component/index/LineChartContainer.jsx";
import ScatterPlotContainer from "../app/component/index/ScatterPlotContainer.jsx";
import AreaChartContainer from "../app/component/index/AreaChartContainer.jsx";

function App() {
    return (
      <div className="App">
        <BarChartContainer />
        <PieChartContainer />
        <LineChartContainer />
        <ScatterPlotContainer />
        <AreaChartContainer />
      </div>
    );
  }
  
  const rootElement = document.getElementById("app");
  ReactDOM.render(<App />, rootElement);
//ReactDOM.render(<Index/>,document.getElementById('app'));