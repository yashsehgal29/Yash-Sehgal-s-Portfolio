import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3 // Adjust the threshold as needed
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100 " : "opacity-0 "
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
