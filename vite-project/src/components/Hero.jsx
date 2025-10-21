import { useNavigate } from "react-router-dom";
import oiltexLogo from "../assets/oiltex-truck-logo.png";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <img src={oiltexLogo} alt="Oiltex Truck" className="truck-logo" />
        <h1>Fuel Delivered to Your Doorstep</h1>
        <p>Safe, fast and convenient energy delivery for vehicles, homes, and businesses.</p>
        <button onClick={() => navigate('/contact')}>Order Fuel</button>
      </div>
    </section>
  );
}

export default Hero;

