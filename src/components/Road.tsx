import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Road(){

    const cards = [
        {
            number: '01',
            title: 'Easy Trading',
            description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
        },
        {
            number: '02',
            title: '24/7 Help Service',
            description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
        },
        {
            number: '03',
            title: 'Fast Service',
            description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
        },
        {
            number: '04',
            title: 'Low Charges',
            description: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
        },


    ]

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    return(
        <section className = "bg-[url('/images/ellipse.svg')] bg-[#131517] min-h-200 flex items-center justify-center py-35 max-md:px-3 max-md:py-10">

            <div className = "flex flex-col items-center justify-center">

                <img src="/images/road.svg" alt="road" className = "float md:hidden max-md:mb-12 max-md:max-w-56 max-md:max-h-56"/>

                <motion.div ref = {ref}
                     animate={inView?{opacity:1, y:0}:{opacity:0, y:30}}
                     className = "flex flex-col gap-7.5 max-md:gap-4">
                    <h1 className = "font-source-pro font-bold text-[58px] text-white max-md:text-4xl max-md:text-center">Why Choose Crypto Brains!</h1>
                    <p className = "font-source-sans-pro font-normal text-lg leading-7 text-center text-[#ADB3BF] max-md:text-lg">When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </motion.div>

                <svg className = "my-15 max-md:my-8" width="80%" height="1" viewBox="0 0 1590 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="1590" y2="0.5" stroke="url(#paint0_linear_26344_1890)"/>
                    <defs>
                        <linearGradient id="paint0_linear_26344_1890" x1="2.22121e-06" y1="1.5" x2="1590" y2="1.50331" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.04"/>
                            <stop offset="0.484182" stop-color="white" stop-opacity="0.2"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.04"/>
                        </linearGradient>
                    </defs>
                </svg>


                <div className = "flex flex-row gap-33 max-md:flex max-md:flex-col">

                    <div ref = {ref} className = "flex flex-col items-center gap-17 max-md:gap-10 max-md:w-full">
                        {cards.map((item, index)=>(
                            <motion.div
                                animate={inView?{opacity:1, y:0}:{opacity:0, y:30}}
                                transition={{duration:0.6, delay: index*0.1}}
                                key={index} 
                                className = "flex flex-row gap-5 items-center max-md:w-full max-md:max-w-88 max-md:bg-white/5 max-md:rounded-lg max-md:px-4 max-md:py-5 max-md:backdrop-blur-sm"
                            >
                                <span className = "font-source-sans-pro font-bold text-[58px] text-[#272A34] max-md:text-[#1B70F1] max-md:min-w-14">{item.number}</span>

                                <div className = "flex flex-col gap-3">
                                    <h2 className = "font-source-sans-pro font-semibold text-2xl leading-9 text-[#ADB3BF]">{item.title}</h2>
                                    <p className = "font-source-sans-pro font-normal text-base leading-6 text-[#808A9A] max-w-77">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <img src="/images/road.svg" alt="road" className = "float max-md:hidden"/>

                </div>

            </div>
        </section>
    );
}