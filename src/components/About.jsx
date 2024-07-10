import React from "react";
import Layout from "./Layout";
const About = () => {
  return (
    <div className="w-screen h-fit lg:h-screen bg-[#232222] ">
      {/* heading */}
      <div className="pt-10" id="about">
        <h1 className="text-4xl font-bold text-center lg:text-5xl font-comforta">
          About Me
        </h1>
      </div>
      {/* main content */}
      <div className="flex flex-col justify-center w-full h-full gap-10 p-10 lg:p-0 lg:mt-10 lg:flex-row">
        {/* image on left */}
        <div className="flex justify-center px-10 lg:px-0 h-3/5">
          <img
            className="w-auto h-full shadow-xl rounded-3xl shadow-black"
            src="https://github.com/yashsehgal29/images/blob/main/mine.jpg?raw=true"
            alt=""
          />
        </div>
        {/* content on right */}
        <div className="flex items-center justify-center w-full text-center text-white lg:w-1/2 h-fit lg:text-md 2xl:text-2xl ">
          <div className="flex flex-col items-center justify-center gap-y-6">
            <span>
              Hello! I'm Yash Sehgal, a dedicated and ambitious third-year
              undergraduate student pursuing a B.Tech in Computer Science and
              Engineering at the prestigious Indian Institute of Technology,
              Mandi. I strive to leverage my skills in programming, machine
              learning, and software development to solve real-world problems. I
              have honed my experience in various programming languages like
              C++, JavaScript, and Python, and developed skills with frameworks
              and tools such as ReactJS, NodeJS, TensorFlow, and Keras.
            </span>

            <span>
              Beyond academics, I am an avid photographer and trekker, actively
              contributing to the Photography and Movie Making Club, as well as
              the Hiking and Trekking Club at IIT Mandi.
            </span>
            <span>
              As I continue to grow and learn, I am excited to explore new
              opportunities that allow me to apply my skills and passion for
              technology to make a meaningful impact.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
