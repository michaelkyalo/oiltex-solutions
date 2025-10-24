import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#222",
        color: "#fff",
      }}
    >
      <h2 style={{ margin: 0 }}>Oiltex Solutions</h2>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
