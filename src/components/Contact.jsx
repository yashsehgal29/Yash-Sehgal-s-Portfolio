import React from "react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return (
    <div className="w-screen h-[100vh] pt-10">
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center md:text-4xl lg:text-5xl font-comforta">
          Contact Me
        </h1>
      </div>
      {/* form */}
      <form className="flex items-center justify-start ml-[20%] w-full h-full">
        <div className="flex flex-col w-full lg:w-1/2 gap-y-5 h-2/3">
          <div className="flex flex-col lg:flex-row  gap-[1%] justify-start  w-1/2">
            <label htmlFor="name" className="text-[110%]">
              {" "}
              Your Name :
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#323232] mix-blend-color-dodge  px-5 py-1 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#14FFEC] "
            />
          </div>
          <div className="flex flex-col lg:flex-row   gap-[2%] justify-start  w-1/2">
            <label htmlFor="email" className="text-[110%]">
              {" "}
              Your Email :
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#323232] mix-blend-color-dodge  px-5 py-1 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#14FFEC]  "
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-[2%] justify-start lg:items-start  w-full">
            <label htmlFor="message" className="text-[110%] ">
              Message :
            </label>
            <textarea
              rows={4}
              cols={30}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#323232] mix-blend-color-dodge  px-5 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#14FFEC96] w-1/2 lg:w-1/2   resize"
            />
          </div>
          <div className="flex justify-between w-1/2 lg:justify-start lg:ml-[20%]">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-1/2 lg:w-1/4 font-extrabold border-[#14FFEC] border-2 py-3 px-4 rounded-2xl shadow shadow-[#14FFEC] hover:shadow-md hover:shadow-[#14FFEC]  transition duration-300  "
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
