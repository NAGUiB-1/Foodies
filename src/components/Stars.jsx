import Star from "../assets/stars.png";
import RightArrow from "../assets/RightArrow.svg";

export default function Stars() {
  let pstyle = "text-[#06C167] font-bold text-4xl";
  return (
    <div className="mt-20 container mx-auto flex flex-col-reverse lg:flex-row lg:h-[650px] gap-[4rem] lg:justify-center lg:items-center ">
      <div className="right w-full lg:w-[calc(50%-2rem)] flex lg:items-start flex-col justify-center items-center">
        <p>Our Stars</p>
        <h3 className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center lg:text-left">
          Veggie Food Goes On And Always On
        </h3>
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 lg:justify-between justify-center lg:items-start items-center w-full  mb-8">
          <div className="flex flex-col gap-8  items-center">
            <p className={pstyle}>1,500</p>
            <p>Sold Product</p>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <p className={pstyle}>500</p>
            <p>Possitive Feedback</p>
          </div>
          <div className="flex flex-col gap-8  items-center">
            <p className={pstyle}>400</p>
            <p>Official Store</p>
          </div>
        </div>
        <div className="flex bg-[#06C167] py-6 px-10 rounded text-white font-bold gap-2 cursor-pointer">
          <p> Get Special Promo</p>
          <img src={RightArrow} alt="RightArrow" />
        </div>
      </div>
      <div className="left w-full lg:w-[calc(50%-2rem)] lg:h-[90%] relative bg-[#F3FCF7] flex items-start justify-center lg:justify-end">
        <img src={Star} alt="Stars" className="w-[90%] lg:static " />
      </div>
    </div>
  );
}
