import { Github } from "lucide-react";
import React from "react";
import { Link } from "lucide-react";
const Card = ({ title, desc, gitlink, hostlink }) => {
  return (
    <div className=" bg-[#323232] w-4/5 lg:w-[25%] h-fit px-5 py-3 rounded-xl  shadow-lg hover:shadow-black mb-3 ">
      {/* card heading */}
      <div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
      {/* short description */}
      <div className="w-full mt-3 text-center text-white h-fit">{desc}</div>
      {/* project links */}
      <div className="flex w-full mt-2 bg-center justify-evenly h-1/4">
        <a href={gitlink} className="rounded-full hover:bg-[#444343] p-3">
          <Github />
        </a>
        {hostlink && (
          <a href={hostlink} className="rounded-full hover:bg-[#444343] p-3">
            <Link />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
