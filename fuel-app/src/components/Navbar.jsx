import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showCommercial, setShowCommercial] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">FUELGO KENYA</div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/fuel-ride">Fuel My Ride</Link>
        <Link to="/fuel-boat">Fuel My Boat</Link>
        <Link to="/fuel-fleet">Fuel My Fleet</Link>
        <Link to="/residential">Residential Condos</Link>

        <div
          className="dropdown"
          onMouseEnter={() => setShowCommercial(true)}
          onMouseLeave={() => setShowCommercial(false)}
        >
          <span className="dropdown-title">Commercial ▾</span>
          {showCommercial && (
            <div className="dropdown-menu">
              <Link to="/commercial/generators">Generators</Link>
              
              <Link to="/commercial/construction">Construction</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
