import React from "react";
import ChartBar from "./ChartBar";
import "./FlavorChart.css"

const FlavorChart = (props) => {
  return (
    <div className="chart"> 
      {props.stats.map(dataPoint => 
      <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue = {4} label={dataPoint.label} />
      )}
    </div>
  );
}

export default FlavorChart;