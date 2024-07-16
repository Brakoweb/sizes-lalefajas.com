import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const getBraSize = (bustMeasurement) => {
  let size = "";
  if (bustMeasurement >= 30 && bustMeasurement <= 32) {
    return (size = "S");
  } else if (bustMeasurement >= 33 && bustMeasurement <= 34) {
    return (size = "M");
  } else if (bustMeasurement >= 35 && bustMeasurement <= 36) {
    return (size = "L");
  } else if (bustMeasurement >= 37 && bustMeasurement <= 38) {
    return (size = "XL");
  } else {
    return (size = "N/A");
  }
};

const BraSizeCalculator = ({ setSelectedApp }) => {
  const [size, setSize] = useState("N/A");
  const [bustMeasurement, setBustMeasurement] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked && (bustMeasurement < 30 || bustMeasurement > 38)) {
      const MySwal = withReactContent(Swal);
      Swal.fire(
        "Lo sentimos...",
        "Por favor contactenos al 000-000-0000",
        "question"
      );

      setBustMeasurement(0);
      setSize("N/A");
      return;
    }

    const calculatedSize = getBraSize(bustMeasurement);
    setSize(calculatedSize);
  }, [bustMeasurement, buttonClicked]);

  const handleBtn = () => {
    const bustValue = document.getElementById("bust").value;
    setBustMeasurement(parseFloat(bustValue));
    setButtonClicked(true);
  };

  return (
    <>
      <label htmlFor="bust">Bust Measurement (inches):</label>
      <input
        id="bust"
        name="bust"
        type="number"
        placeholder="00"
        required
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^\d]/, "").slice(0, 2);
        }}
      />
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

export default BraSizeCalculator;
