import Date from '../components/Date'
export default function Deal() {
    return(
        <div className="h-[85vh] bg-cover bg-no-repeat bg-center flex items-center justify-center md:justify-end my-14" style={{backgroundImage: "url(bg_3.jpg.webp)"}}>
            <div className="w-[55%] flex flex-col items-center" data-aos="fade-up">
                <div>
                    <p className="text-background font-Lora italic text-lg font-medium">Best Price For You</p>
                    <h1 className="text-5xl font-medium my-6">Deal of the day</h1>
                    <p className="text-textColors text-sm">Far far away, behind the word mountains, far from the countries Vokalia<br/> and Consonantia</p>
                    <p className="font-Lora text-3xl text-background italic my-5 font-medium">Spinach</p>
                    <h3 className="text-background font-medium text-xl"><span className="text-textColors">$10</span> now $5 only</h3>
                    <h1></h1>
                    <div className='mt-14'>
                        <Date duration ={ 100 * 24 * 60 * 60 * 1000 }/>
                        <div className="flex gap-12 text-sm font-medium">
                            <p>Day</p>
                            <p>Hours</p>
                            <p>Minutes</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}