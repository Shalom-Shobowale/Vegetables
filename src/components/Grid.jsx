import Button from "../components/Botton";

export default function Grid() {
  return (
    <div className="flex justify-between gap-4 w-[90%] mx-auto">
      <div className="w-[31%]">
        <div
          className=" h-64 bg-no-repeat bg-center bg-cover mb-5"
          style={{ backgroundImage: "url(category-1.jpg.webp)" }}
          data-aos="fade-up"
        >
          <div className="flex">
            <p className="bg-background text-white px-7 py-[5px] mt-[222px]"> Fruits</p>
          </div>
        </div>
        <div
          className=" h-64 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url(category-2.jpg.webp)" }}
           data-aos="fade-up"
        >
          <div className="flex">
            <p className="bg-background text-white px-7 py-[5px] mt-[222px]">Vegetables</p>
          </div>
        </div>
      </div>
      <div
        className="w-[33%] bg-no-repeat bg-center bg-cover flex items-center flex-col"
        style={{ backgroundImage: "url(category.jpg.webp)" }}
        data-aos="fade-up"
      >
        <h1 className="text-2xl text-background font-Lora italic">Vegetables</h1>
        <p className="text-textColors text-[15px] my-2 tracking-tight">Protect the health of every home</p>
        <Button name="Shop now"/>
      </div>
      <div className="w-[31%]">
        <div
          className="h-64 bg-no-repeat bg-center bg-cover mb-5"
          style={{ backgroundImage: "url(category-3.jpg.webp)" }}
           data-aos="fade-up"
        >
          <div className="flex">
            <p className="bg-background text-white px-7 py-[5px] mt-[222px]">Juice</p>
          </div>
        </div>
        <div
          className="h-64 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url(category-4.jpg.webp)" }}
           data-aos="fade-up"
        >
          <div className="flex">
            <p className="bg-background text-white px-7 py-[5px] mt-[222px]">Dried</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// Compare this snippet from src/app/components/Footer.jsx: