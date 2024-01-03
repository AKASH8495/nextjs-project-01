"use client";

import { useState } from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const ReviewPageData = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-between ">
      <button onClick={prevSlide} className="bg-gray-200 p-3 cursor-pointer border rounded-full ml-8">
        <FaAngleDoubleLeft />
      </button>
      <div className="flex flex-col items-center text-center max-w-[50%]">
        <p className="text-1xl font-bold">{slides[currentIndex].text}</p>
        <div className="flex">
        
        <p className="mt-3">{slides[currentIndex].name}</p>
        </div>
      </div>
      <button onClick={nextSlide} className="bg-gray-200 p-3 cursor-pointer border rounded-full mr-8 ">
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default ReviewPageData;
