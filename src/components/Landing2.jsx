import Link from "next/link";

export default function Landing2({name, image, title}){
    return(
      <div className="bg-no-repeat bg-cover bg-center h-[60vh] flex flex-col justify-center items-center" style={{backgroundImage: image}}>
        <Link href="/home" className="text-white text-[12px] tracking-[3px] font-light uppercase" data-aos="fade-up">{name}</Link>
        <h1 className="text-white text-3xl font-extrabold uppercase mt-2" data-aos="fade-up" data-aos-delay="300">{title}</h1>
      </div>
      
  
    )
  }