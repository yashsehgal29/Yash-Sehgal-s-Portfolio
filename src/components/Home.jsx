import React from "react";

import { Linkedin } from "lucide-react";
import { Instagram, Github, Mail, ArrowDownToLine } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const handledownload = () => {};
const Home = () => {
  return (
    <div className="w-[100%] h-[85vh] bg-[url('https://github.com/yashsehgal29/images/blob/main/bg_2.png?raw=true')] bg-cover  bg-fixed  bg-top   bg-no-repeat   ">
      <div className="w-full flex justify-center items-center h-[80vh] p-10 lg:flex-row flex-col-reverse gap-y-6">
        {/* content div */}
        <div className="flex flex-col justify-center w-full pl-5 lg:w-1/3 lg:pl-20 ">
          {/* hello */}
          <div className="text-left">
            <span className="text-xl text-white font-zoa 2xl:text-3xl lg:text-2xl">
              {" "}
              Hello it's me..
            </span>
          </div>
          {/* name */}
          <div className="mt-[20px] text-left ">
            <span className="font-bold text-3xl lg:text-5xl 2xl:text-6xl font-merri bg-gradient-to-r from-[#14FFEC] via-[#09878e] to-[#14FFEC] text-transparent bg-clip-text">
              Yash Sehgal
            </span>
          </div>
          {/* typerwrite */}
          <div className="flex gap-4 text-xl lg:text-2xl 2xl:text-3xl font-bold mt-[20px]">
            <span className="text-white">I am a</span>
            <span className="">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Designer",
                  1000,
                  "Software Engineer",
                  1000,
                  "Photographer",
                  1000
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          {/* icons */}
          <div className="flex mt-[20px] w-1/2 items-center justify-between text-left 2xl:gap-4 lg:gap-2 gap-1 text-white">
            <div className="w-fit border-transparent border-2 rounded-full hover:border-[#14FFEC] p-2 transition duration-500 ease-in-out">
              <a
                href="https://www.linkedin.com/in/yash-sehgal-429a8826b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPau7oBqUSlmy67vsNUOAew%3D%3D"
                target="_blank"
              >
                <Linkedin size={32} strokeWidth={1.75} />
              </a>
            </div>
            <div className="w-fit border-transparent border-2 rounded-full hover:border-[#14FFEC] p-2 transition duration-500 ease-in-out">
              <a
                href="https://www.instagram.com/yashsehgal_29/"
                target="_blank"
              >
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

          {/* downloadcv button */}
          <div className="mt-[20px] w-fit">
            <a
              href="/src/assets/Resume Yash Sehgal.pdf"
              target="_blank"
              download={true}
            >
              <button className="flex gap-2 font-extrabold border-[#14FFEC] border-2 p-3 rounded-2xl shadow shadow-[#14FFEC] hover:shadow-md hover:shadow-[#14FFEC]  transition duration-300">
                Download CV
                <ArrowDownToLine strokeWidth={2.75} absoluteStrokeWidth />
              </button>
            </a>
          </div>
        </div>
        {/* image div */}
        <div className="flex items-center justify-center w-3/4 lg:w-1/2 ">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              src="https://github.com/yashsehgal29/images/blob/main/Mask%20group.png?raw=true"
              alt="Yash Sehgal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
