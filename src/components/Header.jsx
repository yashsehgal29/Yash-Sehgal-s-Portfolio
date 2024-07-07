import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react";

const Header = () => {
  const [isopen, setisopen] = useState(false);
  const handletoggle = () => {
    setisopen(!isopen);
  };
  return (
    <div className=" top-0 flex justify-evenly lg:justify-between  w-screen h-24 bg-[#323232]  items-center fixed ">
      <ScrollLink
        to="home"
        smooth={true}
        offset={-100}
        duration={500}
        className="text-3xl ml-[10%] font-bold cursor-pointer"
      >
        Yash Sehgal.
      </ScrollLink>
      {/* Navbar */}
      <div
        id="navbar"
        className="hidden lg:flex gap-10 p-1 mr-[10%] text-xl font-comforta font-bold mt-3"
      >
        <ScrollLink
          to="home"
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer group"
        >
          Home
          <div className="bg-gradient-to-r from-[#09797f]  to-[#14FFEC]  mt-1 h-[3px] w-0 transition-all duration-500 group-hover:w-full"></div>
        </ScrollLink>
        <ScrollLink
          to="about"
          offset={-100}
          smooth={true}
          duration={500}
          className="cursor-pointer group"
        >
          About
          <div className="bg-gradient-to-r from-[#09797f]  to-[#14FFEC]  mt-1 h-[3px] w-0 transition-all duration-500 group-hover:w-full"></div>
        </ScrollLink>
        <ScrollLink
          to="skills"
          offset={-100}
          smooth={true}
          duration={500}
          className="cursor-pointer group"
        >
          Skills
          <div className="bg-gradient-to-r from-[#09797f]  to-[#14FFEC]  mt-1 h-[3px] w-0 transition-all duration-500 group-hover:w-full"></div>
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer group"
        >
          Projects
          <div className="bg-gradient-to-r from-[#09797f]  to-[#14FFEC]  mt-1 h-[3px] w-0 transition-all duration-500 group-hover:w-full"></div>
        </ScrollLink>
        <ScrollLink
          to="contact"
          offset={-90}
          smooth={true}
          duration={500}
          className="cursor-pointer group"
        >
          Contact
          <div className="bg-gradient-to-r from-[#09797f]  to-[#14FFEC] t mt-1 h-[3px] w-0 transition-all duration-500 group-hover:w-full"></div>
        </ScrollLink>
      </div>
      {/* navbar for smaller screen sm and md */}
      <div
        className="block cursor-pointer hover:flex hover:flex-col lg:hidden hover:bg-[#545151] p-4 rounded-full group relative "
        onClick={handletoggle}
      >
        <Menu />
        {/* menu panel */}
        {isopen ? (
          <div className="absolute bg-opacity-60 mt-10 right-0  text-xl py-3 px-4 bg-[#323232] font-comforta">
            <div className="w-full py-2">
              <ScrollLink
                to="home"
                offset={-90}
                smooth={true}
                duration={500}
                className="cursor-pointer group"
                onClick={handletoggle}
              >
                Home
              </ScrollLink>
            </div>
            <div className="w-full py-2">
              <ScrollLink
                to="about"
                offset={-90}
                smooth={true}
                duration={500}
                className="cursor-pointer group"
                onClick={handletoggle}
              >
                About
              </ScrollLink>
            </div>
            <div className="w-full py-2">
              <ScrollLink
                to="skills"
                offset={-90}
                smooth={true}
                duration={500}
                className="cursor-pointer group"
                onClick={handletoggle}
              >
                Skills
              </ScrollLink>
            </div>
            <div className="w-full py-2">
              <ScrollLink
                to="projects"
                offset={-90}
                smooth={true}
                duration={500}
                className="cursor-pointer group"
                onClick={handletoggle}
              >
                Projects
              </ScrollLink>
            </div>
            <div className="w-full py-2">
              <ScrollLink
                to="contact"
                offset={-90}
                smooth={true}
                duration={500}
                className="cursor-pointer group hover:bg-[#646161]"
                onClick={handletoggle}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
