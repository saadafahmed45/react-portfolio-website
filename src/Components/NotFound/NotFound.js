import React from "react";
import './NotFound.css'
import { Link } from "react-router-dom";
import notFound from "../../images/error.svg";
const NotFound = () => {
  return (
    <div>
      <section className="error_page">
        <img  src={notFound} alt="" />
      </section>
      <div>
        <Link to="/" className="btn btn-sm btn-outline-success">Back Home Pages --></Link>
 
      </div>
    </div>
  );
};

export default NotFound;
