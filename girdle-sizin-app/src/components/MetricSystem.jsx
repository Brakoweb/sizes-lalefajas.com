export const MetricSystem = ({ metricSystem, setMetricSystem }) => {
  const handleSelectChange = (event) => {
    event.target.value == "true"
      ? setMetricSystem(true)
      : setMetricSystem(false);
  };

  return (
    <>
      <label htmlFor="metricSystem">Sistema m&eacute;trico:</label>
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
      <br />
    </>
  );
};
