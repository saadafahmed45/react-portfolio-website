import axios from "axios";
import React, { useState } from "react";
import "./AddPortfolio.scss";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddPortfolio = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [fullImageURL, setImageTwoURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      liveSite: data.liveSite,
      githubCode: data.githubCode,
      imageURL: imageURL,
      fullImageURL: fullImageURL,
    };
    console.log(eventData);

    const url = `http://localhost:7000/addPortfolio`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        // alert('Services Added successfully');

        toast.success("New Portfolio Added successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  console.log("server side event adding");

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "b4b1f486e968233b59e61b85436b10d0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(imageData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageUploadTwo = (event) => {
    console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "b4b1f486e968233b59e61b85436b10d0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageTwoURL(response.data.data.display_url);
        console.log(imageData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-sm-6 col-md-9">
          {/* <h1>this is Dashboard</h1> */}

          <div className="container" style={{ padding: "30px" }}>
            <div className="input-box section-header">
              <h1>
                My <span>Portfolio</span>
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input
                  className="form-control"
                  name="name"
                  placeholder="Project Name"
                  {...register("name")}
                />
                <br />

                <textarea
                  className="form-control"
                  placeholder="Live-Site:"
                  type="text"
                  name="name"
                  {...register("liveSite")}
                />
                <br />
                <textarea
                  className="form-control"
                  placeholder="Github-Code:"
                  type="text"
                  name="name"
                  {...register("githubCode")}
                />

                <br />
                <p>Project Image</p>
                <input
                  placeholder="Price"
                  className="form-control"
                  type="file"
                  onChange={handleImageUpload}
                />
                <br />
                <p>Project full Image</p>
                <input
                  placeholder="Price"
                  className="form-control"
                  type="file"
                  onChange={handleImageUploadTwo}
                />
                <br />
                <input className="portfolio_Abtn" type="submit" />
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPortfolio;
