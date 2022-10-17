import React from "react";
import RightArrow from "../assets/RightArrowGreen.svg";

function Pcard({ title, img }) {
  return (
    <div className="w-[260px] border-2 flex gap-4 p-8 jusify-center items-start flex-col">
      <div>
        <img src={img} alt="" />
      </div>
      <p className="text-[#06C167] font-bold text-lg text-center w-full">
        {" "}
        &#128970; &#128970; &#128970; &#128970; &#128970;
      </p>
      <h5 className="w-full text-center text-2xl">{title}</h5>
      <p className="w-full text-center text-[#06C167] font-bold">
        <span className="line-through text-[#d1d1d1]">$29</span> $25
      </p>
      <div className="flex mx-auto border-2 border-[#06C167] py-2 px-2 w-fit rounded text-[#06C167] font-bold gap-2 cursor-pointer">
        <p> Buy Now </p>
        <img src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
}

export default Pcard;
