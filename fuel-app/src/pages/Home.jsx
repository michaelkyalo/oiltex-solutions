import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container py-5 page-surface">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="text-danger">Fuel your ride at home or your fleet at work.</h1>
          <p className="lead">Never pump gas again — we deliver fuel directly to you.</p>

          <div className="d-flex gap-2">
            <button className="btn btn-danger" onClick={() => navigate("/fuel-ride")}>
              Fuel My Ride
            </button>
            <button className="btn btn-outline-danger" onClick={() => navigate("/fuel-fleet")}>
              Fuel My Fleet
            </button>
          </div>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" alt="truck" className="img-fluid" style={{ maxWidth: 260 }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
