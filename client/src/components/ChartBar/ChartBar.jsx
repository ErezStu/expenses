import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label, filteredMonth }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) barFillHeight = Math.round((value / maxValue) * 20) + "%";

  return (
    <div className="chart-bar">
      <div
        className={`chart-bar__inner ${
          label === filteredMonth ? "selected" : ""
        }`}
      >
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHeight,
            backgroundColor: "var(--expenses-blue-one)",
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
      <p className="chart-bar__month_summary">{value.toFixed(0)}</p>
    </div>
  );
};

export default ChartBar;
