import React from "react";
import Heading from "./Heading";
import CourseCard from "../Layout/CourseCard";
import webImg from "../assets/images/web-dev.svg";
import appImg from "../assets/images/App-dev.svg";
import graphicImg from "../assets/images/graphic.svg";
import digitalImg from "../assets/images/digital.svg";
function Courses() {
  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title={"Our"} title1={"Courses"} />
      <div className="flex flex-wrap justify-center gap-5 mt-6">
        <CourseCard img={webImg} title={"Web Development"} />
        <CourseCard img={appImg} title={"App Development"} />
        <CourseCard img={graphicImg} title={"Graphic Designer"} />
        <CourseCard img={digitalImg} title={"Digital Marketing"} />
      </div>
    </div>
  );
}

export default Courses;
