import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Cards(){

    const card = [
        {
            icon: '/images/icon-1.svg',
            title: 'Create Account',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },

        {
            icon: '/images/icon-2.svg',
            title: 'Verify Bank Account',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },

        {
            icon:'/images/icon-3.svg',
            title: 'Add Fund in Wallet',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },

        {
            icon: '/images/icon-4.svg',
            title: 'Start Trading',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ]

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return(
        <section className = "bg-[#1F2026] h-225 flex flex-col items-center justify-center max-md:h-auto max-md:py-10 max-md:px-4">
            <div className = "flex flex-col justify-center items-center">

                <div className = "flex flex-col gap-7.5 items-center max-md:gap-4">
                    <h1 className = "font-source-sans-pro font-bold text-[58px] text-white max-md:text-[36px] max-md:text-center ">Start Trading In Simple Process</h1>
                    <p className = "font-source-sans-pro font-normal text-lg leading-7 text-[#ADB3BF] max-w-270 text-center max-md:text-lg max-md:max-w-">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <svg width="90%" height="1" viewBox="0 0 1590 1" fill="none" xmlns="http://www.w3.org/2000/svg" className = "mt-14 mb-14 max-md:mt-8 max-md:mb-8   ">
                    <line y1="0.5" x2="1590" y2="0.5" stroke="url(#paint0_linear_26334_1705)"/>
                    <defs>
                        <linearGradient id="paint0_linear_26334_1705" x1="2.22121e-06" y1="1.5" x2="1590" y2="1.50331" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.04"/>
                            <stop offset="0.484182" stop-color="white" stop-opacity="0.2"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.04"/>
                        </linearGradient>
                    </defs>
                </svg>

                <div ref = {ref} className = "flex flex-row gap-7 items-center justify-center max-md:flex max-md:flex-col">
                    {card.map((item, index)=>(
                        <motion.div
                            initial={{opacity:0, y:30}}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{duration:0.8, delay: index*0.15}}
                            key={index} className = "flex flex-col items-center bg-[#272A34] max-w-[clamp(16rem,85%,21.25rem)] max-h-[clamp(12rem,90vh,22.5rem)] rounded-[10px] px-4 py-10 animate-fade ">
                            <img src={item.icon} alt="icon" className = "max-w-15.5 max-h-15.5 mb-4"/>
                            <h1 className = "font-source-sans-pro font-semibold text-2xl leading-9 text-center text-white mb-3">{item.title}</h1>
                            <p className = "font-source-sans-pro font-normal text-base leading-6 text-center text-[#ADB3BF]">{item.description}</p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}