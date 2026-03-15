import { useState } from 'react';

export default function Slider() {
    const slides = [
        {
            id:1,
            icon: '/images/man.png',
            name: 'John Doe',
            country: 'USA, America',
            citate: '/images/citate.svg',
            description: '" Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "'
        },
        {
            id:2,
            icon: '/images/man.png',
            name: 'John Doe',
            country: 'USA, America',
            citate: '/images/citate.svg',
            description: '" Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "'
        },
        {
            id:3,
            icon: '/images/man.png',
            name: 'John Doe',
            country: 'USA, America',
            citate: '/images/citate.svg',
            description: '" Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "'
        },
        {
            id:4,
            icon: '/images/man.png',
            name: 'John Doe',
            country: 'USA, America',
            citate: '/images/citate.svg',
            description: '" Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "'
        },
    ]

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
    
    return(
        <section className="w-full flex flex-col items-center gap-8">
            {/* Контейнер с анимацией */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    <div className="flex">
                        {slides.map((slide) => (
                            <div key={slide.id} className="w-full flex-shrink-0 flex justify-center">
                                <div className="bg-[#272A34] py-10 px-7.5 max-w-160 flex flex-col gap-8 rounded-lg max-md:py-8 max-md:px-5 max-md:max-w-90 max-md:gap-6">
                                    <div className="flex flex-row justify-between max-md:justify-center">
                                        <span className="flex flex-row items-center gap-5">
                                            <img src={slide.icon} alt="icon" className="max-w-18 max-h-18" />
                                            <span className="flex flex-col">
                                                <p className="font-source-sans-pro font-semibold text-[20px] leading-8 text-white">{slide.name}</p>
                                                <p className="font-source-sans-pro font-normal text-sm leading-5 text-[#BFC4CD]">{slide.country}</p>
                                            </span>
                                        </span>
                                        <img src={slide.citate} alt="citate" className="max-w-18 max-h-18 max-md:hidden"/>
                                    </div>

                                    <div className="flex">
                                        <p className="font-source-sans-pro font-normal text-2xl leading-9 text-white max-md:text-base max-md:max-w-100 max-md:text-center">{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <button onClick={prevSlide} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path
                            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>

                </button>
                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/30'}`}></button>
                    ))}
                </div>
                <button onClick={nextSlide} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>

                </button>
            </div>
        </section>
    );
}
