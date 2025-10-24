import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const heroStyle = {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#e4e4e4",
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <section style={heroStyle}>
      <h1>Fuel Delivered to Your Doorstep</h1>
      <p>Fast, reliable and convenient fuel delivery services.</p>
      <button style={buttonStyle} onClick={() => navigate("/contact")}>
        Order Fuel
      </button>
    </section>
  );
}

export default Hero;
