import React from "react";
import Heading from "./Heading";
import Button from "../Layout/Button";
import img from "../assets/images/contact.svg";
import { Link } from "react-scroll";
Link;
function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading />
      <div className="flex flex-col justify-center items-center gap-10 w-full  md:flex-row">
        <form className="w-full space-y-5 md:w-2/4 ">
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px] outline-none"
              type="text"
              name="userName"
              id="user"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userName">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px] outline-none"
              type="text"
              name="userEmail"
              id="user"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userName">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px] outline-none"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
            />
          </div>
          <div className="flex flex-row justify-center ">
            <Link to="contacts">
              <Button title={"Send Message"} />
            </Link>
          </div>
        </form>
        <div className="w-full md:w-2/4">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
