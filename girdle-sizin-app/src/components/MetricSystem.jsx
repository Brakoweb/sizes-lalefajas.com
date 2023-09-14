import { useState } from "react";

export const MetricSystem = ({ metricSystem, setMetricSystem }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleSelectChange = (event) => {
    event.target.value == "true"
      ? setMetricSystem(true)
      : setMetricSystem(false);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="input-container">
      <label htmlFor="metricSystem">Metric System:</label>
      <br />
      <select
        id="metricSystem"
        onChange={handleSelectChange}
        value={metricSystem}
        name="metricSystem"
        required
      >
        <option value="false" defaultValue="false">
          Ft/Lb
        </option>
        <option value="true">M/Kg</option>
      </select>
      <button id="btnInfo" onClick={handleInfoClick}>
        i
      </button>
      {showInfo && (
        <div className="tooltip">
          Select here the metric system you prefer, feet with inches / pounds or
          meters with centimeters / kilograms.
        </div>
      )}
      <br />
    </div>
  );
};
