import React from "react";
import RightArrow from "../assets/RightArrowGreen.svg";

export default function Card({ title, reverse, img }) {
  return (
    <div
      className={`flex w-full ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col justify-center items-center`}
    >
      <div className="w-full h-full">
        <img src={img} alt="food" className="w-full h-full object-cover" />
      </div>
      <div className="w-full border-2 border-[#06C167] h-full">
        <div className="flex flex-col justify-evenly gap-3 h-full p-4  lg:items-start items-center">
          <h4 className="text-4xl text-center md:text-left">{title}</h4>
          <p>We offer the following services</p>
          <div className="flex bg-[#E6F9F0] py-3 px-4 w-fit rounded text-[#06C167] font-bold gap-2 cursor-pointer">
            <p> Get Special Promo</p>
            <img src={RightArrow} alt="RightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
