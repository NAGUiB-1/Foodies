import Pcard from "./Pcard";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
export default function OurProducts() {
  return (
    <div className="container mx-auto mt-20">
      <p className="text-green-500">Our Product</p>
      <h3 className="text-5xl mb-5 font-bold">Most Popular Product</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6  justify-items-center  ">
        <Pcard img={P1} title="Summer Veganie" num={1} />
        <Pcard img={P2} title="Greanie Seafood" num={2} />
        <Pcard img={P3} title="Fresh Vegetable" num={3} />
        <Pcard img={P4} title="Fresh Meatyus" num={4} />
      </div>
    </div>
  );
}
