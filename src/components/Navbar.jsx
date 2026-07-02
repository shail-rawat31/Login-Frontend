import { motion } from "framer-motion";
import {
  FaBell,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar({ user }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}

      <div className="navbar-logo">
        Login<span>Hub</span>
      </div>

      {/* Right Side */}

      <div className="navbar-right">

        <button className="nav-icon">
          <FaBell />
        </button>

        <button className="nav-icon">
          <FaCog />
        </button>

        <div className="user-info">
          <FaUserCircle className="user-avatar" />

          <div>
            <h4>{user?.name || "Guest"}</h4>

            <p>{user?.email || "guest@email.com"}</p>
          </div>
        </div>

        <button
          className="logout-button"
          onClick={logout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </motion.nav>
  );
}

export default Navbar;