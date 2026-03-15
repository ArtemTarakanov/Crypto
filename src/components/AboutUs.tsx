import Slider from './Slider'

export default function AboutUs() {
    return(
        <section className = "bg-[#1E1F25] bg-[url('/images/ellipse-2.svg')] max-h-220 py-30 px-40 flex items-center justify-center max-md:py-12 max-md:px-4">
            <div className = "flex flex-col gap-15 items-center max-md:gap-7.5">
                <div className = "flex flex-row items-center gap-25 max-md:flex-col max-md:gap-4">
                    <h2 className="font-source-pro font-bold text-[58px] text-white max-w-150 max-md:text-4xl max-md:max-w-116 max-md:text-center">What Traders Saying About Us! </h2>
                    <p className = "font-source-pro font-normal text-lg leading-7 text-[#ADB3BF] max-w-260 max-md:text-lg max-md:max-w-100 max-md:text-center">Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled type specimen book.</p>
                </div>

                <svg width="80%" height="1" viewBox="0 0 1590 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:max-w-[50%] ">
                    <line y1="0.5" x2="1590" y2="0.5" stroke="url(#paint0_linear_26344_2275)"/>
                    <defs>
                        <linearGradient id="paint0_linear_26344_2275" x1="2.22121e-06" y1="1.5" x2="1590" y2="1.50331" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.04"/>
                            <stop offset="0.484182" stop-color="white" stop-opacity="0.2"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.04"/>
                        </linearGradient>
                    </defs>
                </svg>

                <Slider/>
            </div>
        </section>
    )
}
