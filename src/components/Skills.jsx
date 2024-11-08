import React from "react";
import Card2 from "./Card2";
const data = [
  {
    skills: "Javascript",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/javascript.png?raw=true"
  },
  {
    skills: "Python",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/python.png?raw=true"
  },
  {
    skills: "CSS",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/css.png?raw=true"
  },
  {
    skills: "HTML",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/html-5.png?raw=true"
  },

  {
    skills: "React JS",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/react.png?raw=true"
  },
  {
    skills: "Redux",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/redux.png?raw=true"
  },
  {
    skills: "C++",
    logopath: "https://github.com/yashsehgal29/images/blob/main/c-.png?raw=true"
  },
  {
    skills: "Tailwind CSS",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/tailwind.png?raw=true"
  },
  {
    skills: "Github",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/github.png?raw=true"
  },
  {
    skills: "Firebase",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/firebase.png?raw=true"
  },
  {
    skills: "MongoDB",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/mongodb.png?raw=true"
  },
  {
    skills: "Numpy",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/numpy.png?raw=true"
  },
  {
    skills: "Pandas",
    logopath:
      "https://github.com/yashsehgal29/images/blob/main/Pandas.png?raw=true"
  },
  {
    skills: "Next JS",
    logopath:
      "https://raw.githubusercontent.com/yashsehgal29/images/refs/heads/main/nextjs-icon.webp"
  },
  {
    skills: "Docker",
    logopath:
      "https://raw.githubusercontent.com/yashsehgal29/images/06c97a1d1aa3bab0c531809c021aa3075f175cfb/docker-mark-blue.svg"
  }
];
const Skills = () => {
  return (
    <div className="w-screen h-fit ">
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center lg:text-5xl font-comforta">
          Skills
        </h1>
      </div>
      {/* project cards */}
      <div className="flex flex-wrap mt-[3%] justify-center lg:px-[15%] gap-8">
        {data.map((item, index) => {
          return (
            <div className="w-1/3 lg:w-fit">
              <Card2 key={index} skill={item.skills} logopath={item.logopath} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
