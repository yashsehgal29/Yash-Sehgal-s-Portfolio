import React from "react";
import Layout from "./Layout";
import Card from "./Card";
import { Github } from "lucide-react";
const data = [
  {
    title:
      " Efficient Convolution Models for Abnormal Heartbeat Signal Detection",
    desc: " Developed a Python-based heartbeat analyzer using TensorFlow and Keras to classify ECG data, ",
    gitlink:
      "https://github.com/yashsehgal29/Abnormal-heart-beat-detection-using-CNN",
    hostlink: ""
  },
  {
    title: " LLM Chat Bot ",
    desc: "Created a cutting-edge Chatbot using advanced pre-trained models, including Mistral 7b, Mistral 8x7b, Llama27b, and Llama2 70b. Leveraged a diverse array of open-source LLMs to create highly efficient conversational AIsolution",
    gitlink: "https://github.com/yashsehgal29/LLMChat-bot",
    hostlink: ""
  },
  {
    title: " Sorting Visualizer ",
    desc: " Created a 'The Sorting Visualizer' to demonstrate sorting algorithms through animations, implemented 5 sortingalgorithms such as Bubble Sort, Merge Sort, Selection Sort, Quick Sort, and Insertion Sort for educational purposes",
    gitlink: "https://github.com/yashsehgal29/Sorting-Visualizer",
    hostlink: "https://sorting-visualizer-blond.vercel.app/"
  },
  {
    title: " Namaste-Mart (an E-commerce Web App)",
    desc: " Developed a responsive and modern e-commerce web application using ReactJS and Tailwind CSS, with statemanagement via Redux Toolkit and Context API, and established protective routes for separate types of users.",
    gitlink: "https://github.com/yashsehgal29/Namaste-Mart",
    hostlink: "https://namaste-mart-opal.vercel.app/"
  }
];
const Projects = () => {
  return (
    <div className="w-screen h-fit ">
      <div className="pt-8">
        <h1 className="mb-5 text-4xl font-bold text-center lg:text-5xl font-comforta">
          Projects
        </h1>
      </div>
      {/* project cards */}
      <div className="flex flex-wrap mt-[3%] justify-center lg:px-[15%] gap-8">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              gitlink={item.gitlink}
              hostlink={item.hostlink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
