import React, { useEffect, useState } from "react";
import "./RemovePortfolio.css";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const RemovePortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("https://floating-everglades-55715.herokuapp.com/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  function deleteProduct(id) {
    console.log(id);
    fetch(`https://floating-everglades-55715.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        // alert('Services Deleted successfully');
        toast.success("Service Deleted successfully!   (reload the page)", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      window.location.reload();
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 ">
          <div className="remove_sec section-header">
            <h1>Remove <span>Portfolio</span></h1>
            <table class="table table-striped table-light mt-3">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">ID</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>
              <tbody>

              {
                  portfolio.map(portfolios => (
                    <tr>

                    <th scope="row">{portfolios.name}</th>
                  <th scope="col">{portfolios._id}</th>

                    <td>
                        
                      <button class="btn btn-outline-success" onClick={() => deleteProduct(`${portfolios._id}`)}>Delete</button>
                    </td>
                  </tr>
                  ))
              }
              </tbody>
            </table>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemovePortfolio;
