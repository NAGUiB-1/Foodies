import Viggie from "../assets/Viggie.png";
import RightArrow from "../assets/RightArrow.svg";

export default function VFoods() {
  return (
    <div
      className="container mx-auto h-[560px] flex flex-col justify-center items-center gap-10 my-20 bg-no-repeat bg-cover bg-center  rounded-2xl bg-fixed transition-all"
      style={{ backgroundImage: `url(${Viggie})` }}
    >
      <h3 className="text-4xl md:text-6xl lg:text-7xl text-center text-white">
        Veggie Foods? Ingredients You Want To Try
      </h3>
      <div className="flex bg-[#06C167] py-6 px-10 rounded text-white font-bold gap-2 cursor-pointer w-fit hover:bg-green-800 hover:scale-90 transition-all">
        <p> Get Special Promo</p>
        <img src={RightArrow} alt="RightArrow" />
      </div>
    </div>
  );
}
