import { useState } from "react";
import Icon from "../assets/icon.svg";
let liStyle = "uppercase hover:text-green-500 transition-all";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className=" bg-[#F3FCF7]">
      <div className="container flex relative justify-between items-center py-6 mx-auto font-bold ">
        <p className="text-[#06c167] uppercase text-2xl ">Foodies</p>
        <img
          src={Icon}
          className="block md:hidden cursor-pointer"
          alt=""
          onClick={() => setShow(!show)}
        />
        <ul
          className={`${
            show ? "flex" : "hidden"
          } md:flex gap-3 md:flex-row top-full text-center flex-col absolute sm:absolute md:static w-full md:w-auto bg-[#f3fcf7] md:bg-inherit md:py-0 py-10`}
        >
          <li className={`active ${liStyle}`}>Home</li>
          <li className={liStyle}>About</li>
          <li className={liStyle}>Service US</li>
          <li className={liStyle}>Our Company</li>
          <li className={liStyle}>Pages</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
