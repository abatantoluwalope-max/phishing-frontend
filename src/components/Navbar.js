import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) => ({
    color: "white",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    backgroundColor: isActive
      ? "rgba(255,255,255,0.25)"
      : "transparent",
    transition: "all 0.3s ease",
  });

  return (
    <>
      <style>
        {`
          .navbar {
            background: linear-gradient(90deg, #0F8B6D, #127A63);
            padding: 15px 30px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .nav-item:hover {
            background-color: rgba(255,255,255,0.15);
            transform: translateY(-2px);
          }
        `}
      </style>

      <nav className="navbar">
        <NavLink className="nav-item" style={navStyle} to="/">
          Dashboard
        </NavLink>

        <NavLink className="nav-item" style={navStyle} to="/analyzer">
          Email Analyzer
        </NavLink>

        <NavLink className="nav-item" style={navStyle} to="/metrics">
          Metrics
        </NavLink>

        <NavLink className="nav-item" style={navStyle} to="/analytics">
          Analytics
        </NavLink>

        <NavLink className="nav-item" style={navStyle} to="/architecture">
          Architecture
        </NavLink>

        <NavLink className="nav-item" style={navStyle} to="/about">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;