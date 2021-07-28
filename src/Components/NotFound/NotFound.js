import React from "react";
import notFound from "../../images/error.svg";
const NotFound = () => {
  return (
    <div>
      <section className="error_page">
        <img style={{ width: "30%" }} src={notFound} alt="" />
      </section>
      <div>
        <button className="btn btn-sm btn-outline-success">Home Pages</button>
        <h4>Lorem ipsum dolor sit.</h4>
 
      </div>
    </div>
  );
};

export default NotFound;
