import React from "react";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div>
      <div className="flex  flex-col border-2 border-lightText items-center rounded-lg p-5 md:flex-row space justify-between p-5 md:px-32 bg-white">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center ">
          <Link
            to="home"
            syp={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-poinnter "
          >
            Home
          </Link>
          <Link
            to="about"
            syp={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-poinnter"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={800}
            delay={100}
            className="hover:text-brightGreen transition-all cursor-poinnter"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            syp={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-poinnter"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            syp={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-poinnter"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
            to="navbar"
            className="font-semibold text-4xl p-1 cursor-pointer "
          >
            eStudy
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          @copyright developed by
          <span className="text-brightGreen px-2 font-semibold">Rms</span>All
          right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
