import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FuelRide from "./pages/FuelRide";
import FuelBoat from "./pages/FuelBoat";
import FuelMyFleet from "./pages/ FuelFleet";
import Residential from "./pages/Residential";
import Generators from "./pages/commercial/Generators";
import Construction from "./pages/commercial/Construction";
import LoginPage from "./pages/LoginPage";
import Orders from "./pages/Orders"; // ✅ Import Orders page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Fuel Pages */}
        <Route path="/fuel-ride" element={<FuelRide />} />
        <Route path="/fuel-boat" element={<FuelBoat />} />
        <Route path="/fuel-fleet" element={<FuelMyFleet />} />
        <Route path="/residential" element={<Residential />} />

        {/* Commercial Pages */}
        <Route path="/commercial/generators" element={<Generators />} />
        <Route path="/commercial/construction" element={<Construction />} />

        {/* Orders Tracker */}
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
