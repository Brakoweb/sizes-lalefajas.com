import React from "react";

const Menu = ({ setSelectedApp }) => {
  return (
    <div className="menu">
      <h1>Select Calculator</h1>
      <div className="menu-options">
        <div className="menu-option" onClick={() => setSelectedApp("girdle")}>
          <img src="/images/girdle.jpg" alt="Girdle Calculator" />
          <h2>Girdle Calculator</h2>
        </div>
        <div className="menu-option" onClick={() => setSelectedApp("chin")}>
          <img src="/images/chin_girdle.jpg" alt="Chin Girdle Calculator" />
          <h2>Chin Girdle Calculator</h2>
        </div>
        <div className="menu-option" onClick={() => setSelectedApp("bra")}>
          <img src="/images/bra_size.jpg" alt="Bra Size Calculator" />
          <h2>Bra Size Calculator</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
