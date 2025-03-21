import Image from 'next/image';
import diet from './photo/diet (2).png';
import shipped from './photo/shipped.png';
import awardRibbon from './photo/award-ribbon.png';
import customer from './photo/customer-service.png';

const circles = [
  {
    image: shipped,
    title: "FREE SHIPPING",
    description: "ON ORDER OVER 100%",
    color: "bg-[#e4b2d6]"
  },
  {
    image: diet,
    title: "Always Fresh",
    description: "Product well package",
    color: "bg-[#dcc698]"
  },
  {
    image: awardRibbon,
    title: "Superior Quality",
    description: "Quality products",
    color: "bg-[#b2d6e4]"
  },
  {
    image: customer,
    title: "Fastest Delivery",
    description: "Products delivered on time",
    color: "bg-[#dcd691]"
  },
];

export default function Services() {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center w-[90%] mx-auto my-12 md:my-20">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="flex flex-col items-center  md:mb-0 mb-8"
          data-aos="fade-up"
          data-aos-delay={index * 200} 
        >
          <div
            className={`w-24 h-24 hover:bg-background ${circle.color} rounded-full flex justify-center items-center`}
          >
            <div className="w-20 h-20 border-2 border-slate-200 rounded-full flex justify-center items-center">
              <Image src={circle.image} alt="photo loading" width={50} height={50} />
            </div>
          </div>
          <p className="font-semibold uppercase text-center mt-1 mb-3 ">
            {circle.title}
          </p>
          <p className="text-xs font-medium text-gray-400 uppercase text-center">
            {circle.description}
          </p>
        </div>
      ))}
    </div>
  );
}
