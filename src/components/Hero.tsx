import CurrencyTicker from './CurrencyTicker';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero(){
    const {ref, inView} = useInView({
        threshold: 0.2
    });

    return(
        <section className="min-h-190 max-md:min-h-screen max-md:h-auto bg-[#17191A] bg-[url('/images/bg.svg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center max-md:justify-start px-15 max-md:px-4 max-md:pt-4 max-md:pb-8">            <div className = "flex flex-row max-md:flex-col items-center justify-center max-md:text-center max-md:gap-8">

                {/*Текст слева*/}
                <div className="max-md:order-1" ref={ref}>

                    <img src="/images/hero-2.png" alt="hero image" className = "max-w-125 max-h-125 max-md:max-w-80 max-md:max-h-80 max-md:mx-auto md:hidden float"/>

                    {/*Шильдик*/}
                    <motion.span 
                        initial={{opacity:0, y:20}}
                        animate={inView ? {opacity:1, y:0} : {opacity:0, y:20}}
                        transition={{duration:0.6}}
                        className = "flex flex-row items-center gap-2.5 mb-2.5 max-md:justify-center">
                        <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="39" y2="1" stroke="#1B70F1" strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        <p className = "font-source-sans-pro font-semibold text-2xl max-md:text-xl leading-9 text-[#1B70F1]">Crypto Brains</p>

                    </motion.span>

                    {/*Заголовок*/}
                    <motion.h1 
                        initial={{opacity:0, y:30}}
                        animate={inView ? {opacity:1, y:0} : {opacity:0, y:30}}
                        transition={{duration:0.8, delay:0.1}}
                        className = "font-source-sans-pro font-bold text-7xl max-md:text-4xl tracking-[-1.5px] leading-22 max-md:leading-tight text-white mb-3.5 max-md:mb-4">Buy & Sell Crypto Easy With Crypto Brains</motion.h1>

                    <div className = "w-full flex items-center justify-center mb-3.5 max-md:mb-4">
                        <svg width="547" height="2" viewBox="0 0 547 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-80">
                            <line x1="1" y1="1" x2="546" y2="1" stroke="url(#paint0_linear_26324_553)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6"/>
                            <defs>
                                <linearGradient id="paint0_linear_26324_553" x1="7.64151e-07" y1="2.5" x2="547" y2="2.50039" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#9AC321" stopOpacity="0.1"/>
                                    <stop offset="0.484182" stopColor="#9AC321" stopOpacity="0.8"/>
                                    <stop offset="1" stopColor="#9AC321" stopOpacity="0.1"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>



                    {/*Описание*/}
                    <motion.p 
                        initial={{opacity:0, y:30}}
                        animate={inView ? {opacity:1, y:0} : {opacity:0, y:30}}
                        transition={{duration:0.8, delay:0.2}}
                        className = "font-source-sans-pro font-normal text-xl max-md:text-lg leading-8 text-[#ADB3BF] mb-20 max-md:mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout.</motion.p>


                    {/*Кнопки*/}
                    <div className = "flex flex-row max-md:flex-col items-center gap-7.5 max-md:gap-4 max-md:w-full">
                        <button className = "px-11 h-14 w-48 max-md:w-full max-md:h-12 bg-[#1B70F1] rounded-full max-md:max-w-50 hover:bg-[#1E1F25] border border-[#1B70F1]">
                            <a href="#" className = "font-source-sans-pro font-normal text-xl max-md:text-base leading-8 text-white">Start Now</a>
                        </button>

                        <button className = "px-8 h-14 w-auto max-md:w-full max-md:h-12 rounded-full border border-white max-md:max-w-58 hover:bg-white/10">
                            <a href="#" className = "font-source-sans-pro font-normal text-xl max-md:text-base leading-8 text-white">Beginner's Guide</a>
                        </button>
                    </div>
                </div>

                <img src="/images/hero-2.png" alt="hero image" className = "max-w-125 max-h-125 max-md:max-w-80 max-md:hidden float"/>

            </div>

            <CurrencyTicker />

        </section>
    );
}