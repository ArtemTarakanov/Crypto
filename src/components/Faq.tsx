import Accordeon from "./Accordeon.tsx";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Faq(){
    const { ref, inView } = useInView({
        threshold: 0.2
    });

    return(
        <section className="min-h-250 bg-[url('images/ellipse.svg')] bg-[#131517] flex items-center justify-center">
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center">
                <span className="flex flex-col gap-7.5">
                    <h2 className="font-source-sans-pro font-bold text-[58px] text-white text-center max-md:text-4xl">Frequently Asked Questions</h2>
                    <p className="font-source-sans-pro font-normal text-lg text-[#ADB3BF] leading-7 text-center max-md:text-base">When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </span>

                <svg width="80%" height="1" viewBox="0 0 1590 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-15">
                    <line y1="0.5" x2="1590" y2="0.5" stroke="url(#paint0_linear_26344_2733)"/>
                    <defs>
                        <linearGradient id="paint0_linear_26344_2733" x1="2.22121e-06" y1="1.5" x2="1590" y2="1.50331" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.04"/>
                            <stop offset="0.484182" stopColor="white" stopOpacity="0.2"/>
                            <stop offset="1" stopColor="white" stopOpacity="0.04"/>
                        </linearGradient>
                    </defs>
                </svg>

                <Accordeon/>

            </motion.div>
        </section>
    );
}