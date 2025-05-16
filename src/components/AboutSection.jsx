import Botton from "../components/Botton";

export default function AboutSection(){
    return(
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-no-repeat bg-cover bg-center h-[47vh] md:h-[70vh] w-full md:w-[45%]" style={{backgroundImage: "url(about1.jpg)"}}></div>
            <div className="md:w-[53%] w-[90%]">
                <h1 data-aos="fade-up" className="text-[2.4rem] font-semibold mb-8 leading-[57px]">Welcome to Vegefoods an<br/>eCommerce website</h1>
                <p data-aos="fade-up" data-aos-delay="150" className="text-textColors text-sm leading-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p data-aos="fade-up" data-aos-delay="300" className="my-5 text-textColors text-sm leading-6">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                <div data-aos="fade-up" data-aos-delay="450">
                    <Botton name="Shop now"/>
                </div>
            </div>
        </div>
    )
}

