import axios from "axios";
import React, { useState } from "react";
import './AddPortfolio.scss'
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const AddPortfolio = () => {

  const { register, handleSubmit, watch, errors } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const [fullImageURL, setImageTwoURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      description: data.description,

      imageURL: imageURL,
      fullImageURL: fullImageURL,
      // imageTwoURL: imageTwoURL,
    };
    console.log(eventData);

    const url = `https://secure-reaches-57604.herokuapp.com/addServices`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) =>{
if(res){
  alert('Services Added successfully');

  // toast.error("New Services Added successfully!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   });

}

    }

    )};


    // console.log("server side event adding")
  
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
          <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          {/* <h1>this is Dashboard</h1> */}

          <div className="container" style={{ padding: "30px" }}>
            <div className="input-box">
              <h3>Add Services</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />

                {/* <h5> Name:</h5> */}
                <input
                  className="form-control"
                  name="name"
                  placeholder="Add New services"
                  // defaultValue=" add New Items"
                  {...register("name")}
                />

                <br />
                {/* <h5>Description: </h5> */}

                <textarea
                  className="form-control"
                  placeholder="Description"
                  type="text"
                  name="name"
                  //   defaultValue="Quantity"
                  {...register("description")}
                />
                <br />
                {/* <h5>Price:</h5> */}

                <input
                  className="form-control"
                  placeholder="Price"
                  type="number"
                  name="name"
                  defaultValue="price"
                  {...register("price")}
                />
                <br />
                <h5>Images1:</h5>
                <input
                  placeholder="Price"

                  className="form-control"
                  type="file"
                  onChange={handleImageUpload}
                />
                <br />
                <h5>Images1:</h5>
                <input
                  placeholder="Price"

                  className="form-control"
                  type="file"
                  onChange={handleImageUploadTwo}
                />
                <br />
                <input
                  className="submit-btn btn btn btn-danger brand-bg"
                  type="submit"
                />
              {/* <ToastContainer /> */}

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddPortfolio;