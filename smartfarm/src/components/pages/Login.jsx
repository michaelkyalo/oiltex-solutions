import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">SmartFarmKE</h1>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {/* ⭐ Contact + Social Icons BELOW LOGIN BUTTON */}
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            padding: "10px",
            backgroundColor: "rgba(0,0,0,0.08)",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Contact Us</h3>

          <p>📞 +254 712 345 678</p>
          <p>📧 support@smartfarm.co.ke</p>

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              fontSize: "24px",
            }}
          >
            {/* Twitter */}
            <a
              href="https://twitter.com/smartfarmke"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              style={{ color: "#1DA1F2" }}
            >
              🐦
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/smartfarmke"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              style={{ color: "#1877F2" }}
            >
              📘
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/smartfarmke"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              style={{ color: "#E4405F" }}
            >
              📸
            </a>
          </div>

          <p style={{ marginTop: "10px" }}>
            🌐 smartfarm.co.ke
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
