import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:sourabhahirwar110@gmail.com.com">
        <Button className="contactText">Contact: sourabhahirwar110@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
