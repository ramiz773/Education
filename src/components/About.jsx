import React from "react";
import img from "../assets/images/about.svg";
import { Link } from "react-scroll";
import Button from "../Layout/Button";
import Heading from "./Heading";

function About() {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14 ">
      <div className="w-full md:w-2/4">
        <img src={img} alt="" />
      </div>
      <div className="w-full text-center space-y-2 md:w-2/4">
        <Heading title={"About"} title1={"Us?"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
          fuga quae facere pariatur sit modi unde, hic nobis expedita cum
          officiis, rerum dignissimos suscipit harum qui culpa adipisci
          corrupti.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title={"Contact Us"} />
        </Link>
      </div>
    </div>
  );
}

export default About;
