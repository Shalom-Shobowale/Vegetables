"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

// Sample data
const test = [
  {
    image: "person_1.jpg.webp",
    description: (
      <>
        Far far away, behind the word
        <br /> mountains, far from the countries
        <br /> Vokalia and Consonantia, there live
        <br /> the blind texts.
      </>
    ),
    name: "Garreth Smith",
    occupation: "UI Designer",
  },
  {
    image: "person_2.jpg.webp",
    description: (
      <>
        Far far away, behind the word
        <br /> mountains, far from the countries
        <br /> Vokalia and Consonantia, there live
        <br /> the blind texts.
      </>
    ),
    name: "Garreth Smith",
    occupation: "UI Designer",
  },
  {
    image: "person_3.jpg.webp",
    description: (
      <>
        Far far away, behind the word
        <br /> mountains, far from the countries
        <br /> Vokalia and Consonantia, there live
        <br /> the blind texts.
      </>
    ),
    name: "Garreth Smith",
    occupation: "UI Designer",
  },
  {
    image: "person_1.jpg.webp",
    description: (
      <>
        Far far away, behind the word
        <br /> mountains, far from the countries
        <br /> Vokalia and Consonantia, there live
        <br /> the blind texts.
      </>
    ),
    name: "Garreth Smith",
    occupation: "UI Designer",
  },
  {
    image: "person_1.jpg.webp",
    description: (
      <>
        Far far away, behind the word
        <br /> mountains, far from the countries
        <br /> Vokalia and Consonantia, there live
        <br /> the blind texts.
      </>
    ),
    name: "Garreth Smith",
    occupation: "UI Designer",
  },
  {
    image: "person_1.jpg.webp",
    description: (
      <>
        Far far away, behind the word
        <br /> mountains, far from the countries
        <br /> Vokalia and Consonantia, there live
        <br /> the blind texts.
      </>
    ),
    name: "Garreth Smith",
    occupation: "UI Designer",
  },
];

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TestCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex w-full justify-center mx-auto my-8 mb-16">
      <div className="w-[90%]">
        <Slider {...settings}>
          {test.map((person, index) => (
            <div className="flex flex-col items-center p-4" key={index}  data-aos="fade-up"
            data-aos-delay={index * 200}>
              <div className="flex justify-center">
                <div
                  className="bg-no-repeat bg-center bg-cover h-24 w-24 rounded-full"
                  style={{ backgroundImage: `url(${person.image})` }}
                ></div>
              </div>
              <p className="text-sm text-center my-4 text-gray-700">
                {person.description}
              </p>
              <h1 className="font-medium text-xl text-center mb-2">
                {person.name}
              </h1>
              <p className="uppercase text-center text-xs tracking-widest">
                {person.occupation}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
