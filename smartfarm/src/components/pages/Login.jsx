import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"; // We'll create this CSS file

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
      </div>
    </div>
  );
}

export default Login;
