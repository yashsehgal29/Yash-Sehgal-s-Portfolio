import { Github } from "lucide-react";
import React from "react";
import { Link } from "lucide-react";
const Card = ({ title, desc, gitlink, hostlink }) => {
  return (
    <div className=" bg-[#323232] w-4/5 lg:w-[25%] h-[20rem]  px-5 py-3 rounded-xl  shadow-lg hover:shadow-black mb-3 ">
      {/* card heading */}
      <div className="flex items-center justify-center h-1/6">
        <h2 className="text-xl font-bold text-center truncate">{title}</h2>
      </div>
      {/* short description */}
      <div className="w-full mt-3 overflow-scroll text-center text-white h-2/3">
        {desc}
      </div>
      {/* project links */}
      <div className="flex w-full bg-center justify-evenly h-1/6">
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
