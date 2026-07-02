import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaHome,
  FaUsers,
  FaChartLine,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaEnvelope,
  FaClipboardList,
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [user] = useState({
    name: "Shelly Rawat",
    email: "shelly@gmail.com",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const cards = [
    {
      title: "Projects",
      value: "12",
      color: "#6366F1",
    },
    {
      title: "Tasks",
      value: "38",
      color: "#06B6D4",
    },
    {
      title: "Messages",
      value: "24",
      color: "#8B5CF6",
    },
    {
      title: "Completed",
      value: "92%",
      color: "#22C55E",
    },
  ];

  return (
    <div className="dashboard">

      {/* Background Glow */}

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>
      <div className="glow glow3"></div>

      {/* Sidebar */}

      <aside className="sidebar glass">

        <h2 className="logo">
          Login<span>Hub</span>
        </h2>

        <ul>

          <li className="active">
            <FaHome />
            Dashboard
          </li>

          <li>
            <FaUsers />
            Users
          </li>

          <li>
            <FaChartLine />
            Analytics
          </li>

          <li>
            <FaClipboardList />
            Reports
          </li>

          <li>
            <FaBell />
            Notifications
          </li>

          <li>
            <FaCog />
            Settings
          </li>

        </ul>

        <button
          className="logout-btn"
          onClick={logout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* Main */}

      <main className="dashboard-content">

        {/* Header */}

        <motion.div
          className="topbar glass"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>

            <h1>
              Welcome Back 👋
            </h1>

            <p>
              Here's what's happening today.
            </p>

          </div>

          <div className="profile">

            <FaUserCircle className="avatar" />

            <div>

              <h3>{user.name}</h3>

              <span>{user.email}</span>

            </div>

          </div>

        </motion.div>

        {/* Cards */}

        <div className="cards">

          {cards.map((item, index) => (

            <motion.div
              key={index}
              className="card glass"
              whileHover={{
                scale: 1.05,
              }}
            >

              <h3>{item.title}</h3>

              <h1
                style={{
                  color: item.color,
                }}
              >
                {item.value}
              </h1>

            </motion.div>

          ))}

        </div>

        {/* Activity */}

        <motion.div
          className="activity glass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h2>
            Recent Activity
          </h2>

          <div className="activity-item">

            <FaEnvelope />

            <p>
              New user registered successfully.
            </p>

          </div>

          <div className="activity-item">

            <FaChartLine />

            <p>
              Monthly performance increased by 18%.
            </p>

          </div>

          <div className="activity-item">

            <FaBell />

            <p>
              Two new notifications received.
            </p>

          </div>

        </motion.div>

      </main>

    </div>
  );
}

export default Dashboard;