import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { useState } from "react";
const Banner = () => {
  const [currentSLide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSLide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSLide === 3 ?0  : (prev) => prev + 1);
  };
  console.log(currentSLide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSLide*100}vw)`}}
        className="w-[400vw] h-full flex transition-transform duration-1000 ">
          <img
            className="w-screen "
            src={data[0]}
            alt="imgOne"
            loading="priority"
          />
          <img className="w-screen " src={data[1]} alt="imgTwo" />
          <img className="w-screen " src={data[2]} alt="imgThree" />
          <img className="w-screen " src={data[3]} alt="imgfour" />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
