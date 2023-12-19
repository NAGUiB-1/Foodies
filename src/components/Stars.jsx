import Star from "../assets/stars.png";
import RightArrow from "../assets/RightArrow.svg";

export default function Stars() {
  let pstyle = "text-[#06C167] font-bold text-4xl";
  return (
    <div className="mt-20 container mx-auto flex flex-col-reverse lg:flex-row lg:h-[650px] gap-[4rem] lg:justify-center lg:items-center ">
      <div
        className="right w-full lg:w-[calc(50%-2rem)] flex lg:items-start flex-col justify-center items-center"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <p className="text-green-500">Our Stars</p>
        <h3
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center lg:text-left font-bold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Veggie Food Goes On And Always On
        </h3>
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 lg:justify-between justify-center lg:items-start items-center w-full  mb-8">
          <div
            className="flex flex-col gap-8  items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p className={pstyle}>1500</p>
            <p>Sold Product</p>
          </div>
          <div
            className="flex flex-col gap-8 items-center"
            data-aos="zoom-in"
            data-aos-delay="450"
          >
            <p className={pstyle}>500</p>
            <p>Possitive Feedback</p>
          </div>
          <div
            className="flex flex-col gap-8  items-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <p className={pstyle}>400</p>
            <p>Official Store</p>
          </div>
        </div>
        <div
          className="flex bg-[#06C167] py-6 px-10 rounded text-white font-bold gap-2 cursor-pointer hover:bg-green-300 hover:scale-90 transition-all"
          data-aos="zoom-in-left"
          data-aos-delay="550"
        >
          <p> Get Special Promo</p>
          <img src={RightArrow} alt="RightArrow" />
        </div>
      </div>
      <div
        className="left w-full lg:w-[calc(50%-2rem)] lg:h-[90%] relative bg-[#F3FCF7] flex items-start justify-center lg:justify-end"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img src={Star} alt="Stars" className="w-[90%] lg:static " />
      </div>
    </div>
  );
}
