import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto lead text-center">
          <p className="lead text-center">
            Any queries or just want to connect? Feel free to Contact.
          </p>
          <a href="mailto:abdulnuman009@gmail.com" class="btn btn-primary btn-lg mt-3">Contact Me</a></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
