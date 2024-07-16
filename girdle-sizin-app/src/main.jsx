import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import GirdleApp from "./GirdleApp";
import ChinGirdleApp from "./ChinGirdleApp";
import BraSizeCalculator from "./BraSizeCalculator";
import Menu from "./Menu";

import "./styles.css";

const AppSelector = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <React.StrictMode>
      {selectedApp === null ? (
        <Menu setSelectedApp={setSelectedApp} />
      ) : selectedApp === "girdle" ? (
        <GirdleApp setSelectedApp={setSelectedApp} />
      ) : selectedApp === "chin" ? (
        <ChinGirdleApp setSelectedApp={setSelectedApp} />
      ) : (
        <BraSizeCalculator setSelectedApp={setSelectedApp} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppSelector />);
