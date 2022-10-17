import Card from "./Card";
import V1 from "../assets/v1.png";
import V2 from "../assets/v2.png";
import V3 from "../assets/v3.png";
import V4 from "../assets/v4.png";
export default function OurFeatures() {
  return (
    <div className="container mx-auto mt-20">
      <div>
        <p className=" text-center">Our Features</p>
        <h3 className="text-6xl text-center mb-10">Variety Of Foods</h3>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:gap-0 md:grid-rows-2 md:grid-cols-2">
        <Card title="Veggies Are Forever" img={V1} reverse={false} />
        <Card title="Good For Your Skin" img={V2} reverse={false} />
        <Card title="Veggie Food Groove" img={V3} reverse={true} />
        <Card title="That Comes Close" img={V4} reverse={true} />
      </div>
    </div>
  );
}
