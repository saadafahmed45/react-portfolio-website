import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import dashImg from "../../../images/JavaScript_frameworks_.png"
const Dashboard = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="dashboard">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">My Dashboard</h1>
            <p class="lead">
              This is a modified Dashboard that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        <div className="dashboard_img">
            <img src={dashImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
