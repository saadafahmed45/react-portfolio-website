import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,

} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon /> <h4>Dashboard:-</h4>
          </Link>
          <hr></hr>
        </li>
        <li>
          <Link to="/dashbord/addPortfolio" className="text-white">
            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/dashbord/removePortfolio" className="text-white">
            <FontAwesomeIcon icon={faCalendar} /> <span>Remove Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/dashbord/orderList" className="text-white">
            <FontAwesomeIcon icon={faFileAlt} /> <span>Order List</span>
          </Link>
        </li>

        <li>
          <Link to="/dashbord/manageServices" className="text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
          </Link>
        </li>
      </ul>
      <div>
       
        <Link to="/" onClick={reloadPage} className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout /</span>
        </Link>  
        <Link to="/" className="text-white"><span> Home </span>

          <FontAwesomeIcon icon={faSignOutAlt} /> 
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
