import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex flex-row space justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="font-semibold text-2xl cursor-pointer">
            eStudy
          </Link>
        </div>
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            syp={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-poinnter"
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
            syp={true}
            smooth={true}
            duration={500}
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
        </nav>
        <div className="flex md:hidden" onClick={handleMenu}>
          <div className="p-2">
            {menu ? <IoClose size={24} /> : <IoIosMenu size={24} />}
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div
        className={`${
          menu ? "translate-x-100" : "translate-x-full"
        } flex flex-col absolute bg-white  left-0 top-20 font-medium text-2xl text-center pt-8 pb-4  transition-transform duration-300 gap-8 w-full h-fit md:hidden  `}
      >
        <Link
          to="home"
          syp={true}
          smooth={true}
          duration={500}
          className="hover:text-brightGreen transition-all cursor-poinnter"
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
          syp={true}
          smooth={true}
          duration={500}
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
    </div>
  );
};

export default Navbar;
