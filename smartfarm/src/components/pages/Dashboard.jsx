import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./Dashboard.css";
import farmerImage from "../../assets/farmer.png";

function Dashboard() {
  const navigate = useNavigate();

  const farmScales = [
    { name: "Small-scale", route: "small-scale", color: "#22c55e" },
    { name: "Medium-scale", route: "medium-scale", color: "#facc15" },
    { name: "Large-scale", route: "large-scale", color: "#3b82f6" },
  ];

  return (
    <div className="dashboard-container">
      {/* Background Image */}
      <img src={farmerImage} alt="Farmer" className="full-screen-image" />

      {/* Farm Scale Cards */}
      <div className="overlay-cards">
        {farmScales.map((farm) => (
          <div
            key={farm.name}
            className="farm-card"
            style={{ backgroundColor: farm.color }}
            onClick={() => navigate(farm.route)}
          >
            {farm.name}
          </div>
        ))}

        {/* Logout Button below Large-scale */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Render child routes */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
