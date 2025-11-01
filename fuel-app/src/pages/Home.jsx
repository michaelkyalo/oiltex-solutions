import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Fuel your ride at home or your fleet at work.</h1>
          <p>Never pump gas again — we deliver fuel directly to you.</p>
          <div className="hero-buttons">
            <button className="btn1" onClick={() => navigate("/fuel-ride")}>
              Fuel My Ride
            </button>
            <button className="btn2" onClick={() => navigate("/fuel-fleet")}>
              Fuel My Fleet
            </button>
          </div>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" alt="truck" />
      </div>
    </div>
  );
}

export default Home;
