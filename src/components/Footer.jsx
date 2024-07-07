import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full lg:flex-row h-[17vh] flex justify-evenly items-center bg-[#323232] flex-col  ">
      {/* copyright */}
      <div className="flex items-center justify-center text-sm lg:text-lg ">
        <p className="text-center">
          {" "}
          &copy; {new Date().getFullYear()} Yash Sehgal -- All rights reserved.
        </p>
      </div>
      {/* icons */}
      <div className="flex items-center justify-center text-left text-white 2xl:gap-4 lg:gap-2 md:gap-1">
        <div className="w-fit border-transparent border-2 rounded-full hover:border-[#14FFEC] p-2 transition duration-500 ease-in-out">
          <a
            href="https://www.linkedin.com/in/yash-sehgal-429a8826b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPau7oBqUSlmy67vsNUOAew%3D%3D"
            target="_blank"
          >
            <Linkedin size={32} strokeWidth={1.75} />
          </a>
        </div>
        <div className="w-fit border-transparent border-2 rounded-full hover:border-[#14FFEC] p-2 transition duration-500 ease-in-out">
          <a href="https://www.instagram.com/yashsehgal_29/" target="_blank">
            <Instagram size={32} strokeWidth={1.75} />
          </a>
        </div>
        <div className="w-fit border-transparent border-2 rounded-full hover:border-[#14FFEC] p-2 transition duration-500 ease-in-out">
          <a
            href="https://github.com/yashsehgal29?tab=repositories"
            target="_blank"
          >
            <Github size={32} strokeWidth={3} />
          </a>
        </div>
        <div className="w-fit border-transparent border-2 rounded-full hover:border-[#14FFEC] p-2 transition duration-500 ease-in-out">
          <a href="mailto:yashsehgal2974@gmail.com" target="_blank">
            <Mail size={32} strokeWidth={3} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
