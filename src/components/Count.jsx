import Countfunc from "./Countfunc";
export default function Count(){
    return(
        <div className="md:h-[50vh] bg-no-repeat bg-center bg-cover flex justify-center items-center my-14 " style={{backgroundImage:"url(bg_3.jpg.webp)"}}>
            <div className="flex md:flex-row gap-y-10 md:gap-y-0 flex-col justify-between items-center w-[75%] md:py-0 py-10" >
                <div className="text-center" data-aos="fade-up"  data-aos-delay="100">
                    <Countfunc start={0} end={10000} intervalTime={-100000}/>
                    <p className="uppercase text-xs tracking-widest ">Happy Customers</p>
                </div>
                <div className="text-center" data-aos="fade-up"  data-aos-delay="200">
                    <Countfunc start={0} end={100} intervalTime={80}/>
                    <p className="uppercase text-xs tracking-widest ">Branches</p>
                </div>
                <div className="text-center" data-aos="fade-up"  data-aos-delay="300">
                    <Countfunc start={0} end={1000} intervalTime={40}/>
                    <p className="uppercase text-xs tracking-widest">Partner</p>
                </div>
                <div className="text-center" data-aos="fade-up"  data-aos-delay="400">
                    <Countfunc start={0} end={100} intervalTime={80}/>
                    <p className="uppercase text-xs tracking-widest">Awards</p>
                </div>
            </div>
        </div>
    )
}