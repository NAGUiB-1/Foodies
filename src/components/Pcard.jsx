import React from "react";
import RightArrow from "../assets/RightArrowGreen.svg";

function Pcard({ title, img, num }) {
  return (
    <div
      className="max-w-[260px] border-2 group flex gap-4 p-8 jusify-center items-start flex-col hover:bg-green-100 transition- rounded-lg"
      data-aos="fade-up"
      data-aos-delay={400 + num * 50}
    >
      <div>
        <img
          src={img}
          alt=""
          className="group-hover:scale-110 transition-all"
        />
      </div>
      <p className="text-[#06C167] font-bold text-lg text-center w-full">
        {" "}
        ★★★★★
      </p>
      <h5 className="w-full text-center text-2xl group-hover:font-bold transition-all">
        {title}
      </h5>
      <p className="w-full text-center text-[#06C167] font-bold">
        <span className="line-through text-[#d1d1d1]">$29</span> $25
      </p>
      <div className="flex mx-auto border-2 border-[#06C167] py-2 px-2 w-fit rounded text-[#06C167] font-bold gap-2 cursor-pointer hover:bg-green-300 hover:scale-90 hover:text-white transition-all hover:border-white">
        <p> Buy Now </p>
        <img src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
}

export default Pcard;
