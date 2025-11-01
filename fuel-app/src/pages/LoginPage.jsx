import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple mock login
    if (name && password) {
      localStorage.setItem("fuelgo_user", name); // save name/company
      setMessage("Login successful!");
      navigate("/"); // Go to home page
    } else {
      setMessage("Please enter your name/company and password");
    }
  };

  const handleGuest = () => {
    navigate("/"); // Continue as guest
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">Fuel Go Kenya</h1>
        <p className="subtitle">Log in to your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your name or company name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <button className="guest-btn" onClick={handleGuest}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
