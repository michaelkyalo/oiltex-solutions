import "./Hero.css";

// ✅ Use only this (no import image above)
const phone = "https://via.placeholder.com/300x600?text=App+Preview";

function Hero() {
  return (
    <section className="hero">
      <div className="text-content">
        <h1>Your Fuel. Delivered Fast.</h1>
        <p>
          OilTex provides on-demand fuel & gas delivery across Kenya — fast,
          safe, and affordable.
        </p>
        <div className="hero-buttons">
          <button className="google-btn">Google Play</button>
          <button className="apple-btn">App Store</button>
        </div>
      </div>

      <div className="image-content">
        <img src={phone} alt="App Preview" />
      </div>
    </section>
  );
}

export default Hero;
