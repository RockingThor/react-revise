import React from "react";
import Activity from "./Activity";
import RecentOrders from "./RecentOrders";
import Feedback from "./Feedback";
import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="stats">
        <div className="stat-item">Total Orders: 75</div>
        <div className="stat-item">Total Delivered: 70</div>
        <div className="stat-item">Total Cancelled: 5</div>
        <div className="stat-item">Total Revenue: $12k</div>
      </div>
      <Activity />
      <RecentOrders />
      <Feedback />
    </main>
  );
};

export default Dashboard;
