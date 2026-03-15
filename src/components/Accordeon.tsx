import {useState} from 'react'
import { motion } from 'framer-motion'

export default function Accordeon() {
    const [isOpen, setIsOpen] = useState<number | null>(null)
    const items = [
        {
            id: 1,
            title: 'What is the difference between Defi and Metaverse ?',
            description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
            id: 2,
            title: 'How to complete your KYC Verification ?',
            description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
        {
            id: 3,
            title: 'What should I do if I enter the Google verification code incorrectly ?',
            description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
        {
            id: 4,
            title: 'How we Change mobile number ?',
            description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        }

    ]

    const toggleAccordion = (index: number) => {
        setIsOpen(isOpen === index?null:index);
    };

    return (
        <section className="flex flex-col items-center justify-center gap-3 max-w-225 mx-auto max-md:max-w-90">
            {items.map((item, index) => (
                <div key={index} className="w-full bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 ">
                    <button onClick={() => toggleAccordion(index)} className="w-full flex flex-row items-center justify-between gap-4 p-5 hover:bg-white/10 transition-colors">
                        <p className="font-source-sans-pro font-semibold text-lg leading-7 text-white text-left">{item.title}</p>
                        <span className={`text-[#1B70F1] duration-300 flex-shrink-0 ${isOpen === index ? `rotate-180` : ``}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                        </span>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={isOpen === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10 bg-white/[0.02] overflow-hidden"
                    >
                        <div className="p-5">
                            <p className="font-source-sans-pro font-normal text-base leading-6 text-[#ADB3BF]">{item.description}</p>
                        </div>
                    </motion.div>
                </div>
            ))}
        </section>
    )
}