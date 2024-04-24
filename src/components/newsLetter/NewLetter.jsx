import React from "react";
import { EmailOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
const NewLetter = () => {
  return (
    <>
      <div className="newsletterBanner">
        <span className="emailIcon">
          <EmailOutlined />
        </span>
        <input type="text" placeholder="Your Email Address..." />
        <Button className="bg-g">Subscribe</Button>
      </div>
    </>
  );
};

export default NewLetter;
