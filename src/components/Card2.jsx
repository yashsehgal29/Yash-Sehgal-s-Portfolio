import React from "react";

const Card2 = ({ skill, logopath }) => {
  return (
    <div className=" bg-[#323232] group h-auto p-5 px-4 rounded-xl items-center justify-center flex-col shadow-lg hover:shadow-black mb-4 overflow-hidden">
      {/* card heading */}
      <div className="w-full px-3 ">
        <img
          src={logopath}
          alt={skill}
          className="w-full h-auto lg:w-[100%] lg:h-[10vh]"
        />
      </div>
      {/* overlay */}
      <div>
        <p className="text-center mt-[6%]">{skill}</p>
      </div>
    </div>
  );
};

export default Card2;
