import React from "react";
import { Link } from "react-scroll";
import Button from "../Layout/Button";
import img from "../assets/images/hero.svg";
Button;
function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10 ">
      <div className="md:w-1/2 text-center ">
        <h2 className="text-5xl font-semibold leading-tight">Knowledge with</h2>
        <span className="text-brightGreen text-5xl font-semibold">eStudy</span>
        <p className="text-lightText mt-5 text-start">
          eStudy is your Gateway to a world of limitless learning
          possibilities.with out cuting-edge eLearning platform, you can explore
          a vast library of course, from academic subjects to practical skills,
          all designed to help you achive your goals
        </p>
        <Link to="contacts" spy={true} smooth={true} duration={500}>
          <Button title={"Contact Us"} />
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default Home;
