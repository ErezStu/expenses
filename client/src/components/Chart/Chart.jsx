import ChartBar from "../ChartBar/ChartBar";

import "./Chart.css";

const Chart = ({ dataPoints, filteredMonth, cat }) => {
  console.log(dataPoints);

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          filteredMonth={filteredMonth}
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
