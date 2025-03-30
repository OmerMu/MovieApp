import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFilm,
  FaMagic,
  FaPlusCircle,
  FaPlay,
} from "react-icons/fa";
import AccessibilityPanel from "../components/AccessibilityPanel";

const Navbar = ({ onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* כפתור פתיחה קבוע */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            backgroundColor: "#e50914",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          <FaBars style={{ marginRight: "8px" }} /> Menu
        </button>
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : "-100%",
          width: "260px",
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          transition: "left 0.3s ease-in-out",
          zIndex: 1001,
          boxShadow: open ? "2px 0 10px rgba(0,0,0,0.6)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, color: "#e50914" }}>MENU</h3>
          <FaTimes
            onClick={() => setOpen(false)}
            style={{ cursor: "pointer", fontSize: "20px", color: "#e50914" }}
          />
        </div>

        <nav
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Link to="/" onClick={() => setOpen(false)} style={navLinkStyle}>
            <FaFilm style={iconStyle} /> All Movies
          </Link>
          <Link
            to="/harrypotter"
            onClick={() => setOpen(false)}
            style={navLinkStyle}
          >
            <FaMagic style={iconStyle} /> Harry Potter
          </Link>
          <Link to="/add" onClick={() => setOpen(false)} style={navLinkStyle}>
            <FaPlusCircle style={iconStyle} /> Add Movie
          </Link>
          {/* <button onClick={onToggleTheme}>
            <FaSun style={{ iconStyle }} />
            Toggle Theme
          </button> */}
          <AccessibilityPanel toggleTheme={onToggleTheme} />
        </nav>
      </div>
    </>
  );
};

const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
};

const iconStyle = {
  marginRight: "10px",
  color: "#e50914",
};

export default Navbar;
