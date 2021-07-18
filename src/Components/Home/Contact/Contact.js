import React from "react";
import "./Contact.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import contactImg from '../../../images/c3.svg'
import Fade from 'react-reveal/Fade';


const Contact = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  }));

  const classes = useStyles();

  return (
  <div  className="contact_section "> 
      <section id="contact">
      <div className="container">
      <Fade bottom>
        <div className="section-header">
          <h1>
            Contact <span>Me</span>{" "}
          </h1>
        </div>
        
        </Fade>
        <div className="row mt-5">
          <div className="col-md-6 ">
          <Fade bottom>
            <div className="contact_text text-left">
              <h1>Hire Me.</h1>
              <h6>
                Contact Number:{" "}
                <span>
                  <b>+8801870941293</b>
                </span>{" "}
              </h6>
              <h6>
                Contact Email:{" "}
                <span>
                  <b>mohammadhaolader1@gmail.com</b>
                </span>{" "}
              </h6>
            </div>

            <div className="contact_from text-left">
              <div className="email_pass">
                <form className={classes.root} noValidate autoComplete="off">
                  <div className="em">
                    <TextField
                      id="filled-textarea"
                      label=" Your Name"
                      required
                      // placeholder="Placeholder"
                      multiline
                      variant="filled"
                    />
                    <br />

                    <TextField
                    className="mt-2"
                      id="filled-email-input"
                      required
                      label="Your Email"
                      type="email"
                      variant="filled"
                    />
                    <br />

                    <TextField
                    className="mt-2"

                      id="filled-email-input"
              
                      label="Write a subject"
                      type="email"
                      variant="filled"
                    />
                  </div>

                  <div className="text_area">
                    <TextField
                      id="filled-multiline-static"
                      label="Your Massage"
                      multiline
                      rows={4}
                      variant="filled"
                    />
                  </div>
                  <div className="contact_btn mt-3 ">
                  <input type="button" value="submit"/>
                </div>
                </form>
                
              </div>
            </div>

            </Fade>

          </div>


          <div className="col-md-6">
      <Fade right>
              <div className="contact_img">
                  <img src={contactImg} alt="" />
              </div>
              </Fade>
          </div>

        </div>

      </div>
      
    </section>
    <footer className="copyRight text-center">
     
     <p>Copyright © {new Date().getFullYear()} Mohammad Haolader  </p>
</footer>
  </div>
  );
};

export default Contact;
