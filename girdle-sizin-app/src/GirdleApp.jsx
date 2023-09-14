import propTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FtLb } from "./components/FtLb";
import { MtKg } from "./components/MtKg";
import { MetricSystem } from "./components/MetricSystem";

const calcHeight = (ft, inch) => {
  ft = parseFloat(ft);
  inch = parseFloat(inch);
  return ft + inch * 0.01;
};

const getGirdleSize = (height, weight) => {
  let size = "";
  if (height >= 5 && height <= 5.06) {
    if (weight >= 91 && weight <= 97) {
      return (size = "3XS");
    } else if (weight >= 98 && weight <= 106) {
      return (size = "2XS");
    } else if (weight >= 107 && weight <= 116) {
      return (size = "XS");
    } else if (weight >= 117 && weight <= 131) {
      return (size = "S");
    } else if (weight >= 132 && weight <= 151) {
      return (size = "M");
    } else if (weight >= 152 && weight <= 171) {
      return (size = "L");
    } else if (weight >= 172 && weight <= 191) {
      return (size = "XL");
    } else if (weight >= 192 && weight <= 211) {
      return (size = "2XL");
    } else if (weight >= 212 && weight <= 220) {
      return (size = "3XL");
    } else if (weight < 91 || weight > 220) {
      return (size = "N/A");
    }
  } else if (height >= 5.07 && height <= 6) {
    if (weight >= 98 && weight <= 105) {
      return (size = "3XS");
    } else if (weight >= 106 && weight <= 116) {
      return (size = "2XS");
    } else if (weight >= 117 && weight <= 131) {
      return (size = "XS");
    } else if (weight >= 132 && weight <= 151) {
      return (size = "S");
    } else if (weight >= 152 && weight <= 171) {
      return (size = "M");
    } else if (weight >= 172 && weight <= 191) {
      return (size = "L");
    } else if (weight >= 192 && weight <= 211) {
      return (size = "XL");
    } else if (weight >= 212 && weight <= 220) {
      return (size = "2XL");
    } else if (weight >= 221 && weight <= 228) {
      return (size = "3XL");
    } else if (weight < 98 || weight > 228) {
      return (size = "N/A");
    } else {
      return (size = "N/A");
    }
  } else {
    return (size = "N/A");
  }
};

const App = () => {
  const [size, setSize] = useState("N/A");
  const [ft, setFt] = useState(0);
  const [inch, setInch] = useState(0);
  const [weight, setWeight] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [metricSystem, setMetricSystem] = useState(false);

  useEffect(() => {
    const height = calcHeight(ft, inch);

    if (
      buttonClicked &&
      (height < 5 || height > 6 || weight < 91 || weight > 228)
    ) {
      // Mostrar un alert si la altura está fuera del rango deseado
      const MySwal = withReactContent(Swal);
      Swal.fire(
        "Lo sentimos...",
        "Porfavor contactenos al 000-000-0000",
        "question"
      );

      // Reiniciar los estados a 0 y salir de la función
      setFt(0);
      setInch(0);
      setWeight(0);
      setSize("N/A");
      return;
    }

    const calculatedSize = getGirdleSize(height, weight);
    setSize(calculatedSize);
  }, [ft, inch, weight, buttonClicked]);

  const parseFt = (metro, cm) => {
    let height = parseFloat(metro) + parseFloat(cm) * 0.01;
    height = height * 3.28084; // become Ft
    let decimalPart = height % 1;
    decimalPart = Math.round(decimalPart * 12); // become inch and round it
    height = Math.trunc(height); // number without decimal
    decimalPart = decimalPart * 0.01;
    height = height + decimalPart; // result in ft with inch

    return height;
  };

  const parseWeight = (kg) => {
    return kg * 2.20462; // kg to lb
  };

  const handleBtn = () => {
    if (metricSystem) {
      const metro = document.getElementById("metro").value;
      const cm = document.getElementById("centimetro").value;
      const kg = document.getElementById("peso").value;
      setFt(Math.trunc(parseFt(metro, cm)));
      setInch((parseFt(metro, cm) % 1) * 100);
      setWeight(parseWeight(kg));
    } else {
      setFt(document.getElementById("pies").value);
      setInch(document.getElementById("pulgadas").value);
      setWeight(document.getElementById("peso").value);
    }

    setButtonClicked(true);
  };

  return (
    <>
      <MetricSystem
        metricSystem={metricSystem}
        setMetricSystem={setMetricSystem}
      />
      {metricSystem ? <MtKg /> : <FtLb />}
      <button className="calcBtn" onClick={handleBtn}>
        Calculate
      </button>

      <h1>Size: {size}</h1>
    </>
  );
};

App.propTypes = {
  height: propTypes.number.isRequired,
  weight: propTypes.number.isRequired,
  selectPies: propTypes.number.isRequired,
  selectPulgadas: propTypes.number.isRequired,
};

App.defaultProps = {
  height: 0,
  weight: 0,
  selectPies: 0,
  selectPulgadas: 0,
};

export default App;
