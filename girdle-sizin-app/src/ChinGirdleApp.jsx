import propTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FtLb } from "./components/FtLb";
import { MtKg } from "./components/MtKg";
import { MetricSystem } from "./components/MetricSystem";

const calcNeckCircumference = (inch, cm) => {
  return inch ? parseFloat(inch) : parseFloat(cm) * 0.393701; // Convert cm to inches
};

const getChinGirdleSize = (neckCircumference) => {
  let size = "";
  if (neckCircumference >= 20.4 && neckCircumference <= 22.7) {
    return (size = "S");
  } else if (neckCircumference >= 22.8 && neckCircumference <= 23.1) {
    return (size = "M");
  } else if (neckCircumference >= 23.2 && neckCircumference <= 24.4) {
    return (size = "L");
  } else if (neckCircumference >= 24.5 && neckCircumference <= 26.1) {
    return (size = "XL");
  } else {
    return (size = "N/A");
  }
};

const ChinGirdleApp = ({ setSelectedApp }) => {
  const [size, setSize] = useState("N/A");
  const [inch, setInch] = useState(0);
  const [cm, setCm] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [metricSystem, setMetricSystem] = useState(false);

  useEffect(() => {
    const neckCircumference = calcNeckCircumference(inch, cm);

    if (
      buttonClicked &&
      (neckCircumference < 20.4 || neckCircumference > 26.1)
    ) {
      const MySwal = withReactContent(Swal);
      Swal.fire(
        "Lo sentimos...",
        "Por favor contactenos al 000-000-0000",
        "question"
      );

      setInch(0);
      setCm(0);
      setSize("N/A");
      return;
    }

    const calculatedSize = getChinGirdleSize(neckCircumference);
    setSize(calculatedSize);
  }, [inch, cm, buttonClicked]);

  const handleBtn = () => {
    if (metricSystem) {
      const cmValue = document.getElementById("cm").value;
      setCm(parseFloat(cmValue));
      setInch(0);
    } else {
      const inchValue = document.getElementById("inch").value;
      setInch(parseFloat(inchValue));
      setCm(0);
    }

    setButtonClicked(true);
  };

  return (
    <>
      <MetricSystem
        metricSystem={metricSystem}
        setMetricSystem={setMetricSystem}
      />
      {metricSystem ? (
        <>
          <label htmlFor="cm">Neck Circumference (cm):</label>
          <input
            id="cm"
            name="cm"
            type="number"
            placeholder="00"
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^\d]/, "").slice(0, 2);
            }}
          />
        </>
      ) : (
        <>
          <label htmlFor="inch">Neck Circumference (inch):</label>
          <input
            id="inch"
            name="inch"
            type="number"
            placeholder="00"
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^\d]/, "").slice(0, 2);
            }}
          />
        </>
      )}
      <button className="calcBtn" onClick={handleBtn}>
        Calculate
      </button>
      <button className="backBtn" onClick={() => setSelectedApp(null)}>
        Back to Menu
      </button>

      <h1>Size: {size}</h1>
    </>
  );
};

ChinGirdleApp.propTypes = {
  neckCircumference: propTypes.number.isRequired,
  setSelectedApp: propTypes.func.isRequired,
};

ChinGirdleApp.defaultProps = {
  neckCircumference: 0,
};

export default ChinGirdleApp;
