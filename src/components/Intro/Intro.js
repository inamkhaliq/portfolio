import React from 'react'

const Intro = () => {
    return (
        <section className='relative'>
            <div className='max-w-screen-xl px-10 sm:py-28 py-10 m-auto'>
                <div className='flex flex-wrap '>
                    <div className='md:w-1/2 w-full px-2'>
                        <div>
                            <h1 className='mb-3 text-myBlue font-bold text-base'>
                                Hey There 👋 I am
                                <span className='block text-[2.5rem] leading-none sm:text-5xl text-[#090e34] '>Muhammad Inam Khaliq</span>
                            </h1>
                            <h2 className='text-xl text-gray-500 font-bold mb-5'>
                                Professional :
                                <span className='text-[#090e34] mx-2'>MERN Stack Developer</span>
                            </h2>
                            <p className='mb-11 max-w-96 font-semibold text-gray-500 text-base'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                <a href="https://wa.me/+923041708709" className='bg-myBlue md:text-base text-xs rounded-full py-3 md:px-8 px-4 mr-4 text-white font-bold hover:shadow-xl transition-all duration-300'>Contact Me</a>
                                <a href="https://wa.me/+923041708709" className='bg-[#090e34] md:text-base text-xs rounded-full py-3 md:px-8 px-4 mr-4 text-white font-bold hover:shadow-xl transition-all duration-300'>E-Mail</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full md:relative">
                        <div className="md:absolute lg:left-32 -bottom-12 z-10  sm:w-96 h-auto ">
                            <img
                                className="w-full h-[413px] object-contain"
                                // width={}
                                // height={}
                                src={"./inam.png"} alt="image"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="absolute top-0">
                    <svg width="48" height="95" viewBox="0 0 48 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="0.5" cy="47.5" r="47.5" fill="url(#paint0_radial_6:121)"></circle>
                        <defs>
                            <radialGradient id="paint0_radial_6:121" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.5) rotate(90) scale(95)">
                                <stop stopColor="white"></stop>
                                <stop offset="0.569" stopColor="#F0F4FD"></stop>
                                <stop offset="0.993" stopColor="#D9E0F0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute right-0 bottom-16 md:w-[400px] md:h-[400px]">
                    <svg  viewBox="0 0 491 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="356.5" cy="356.5" r="356.5" fill="url(#paint0_linear_6:37)"></circle>
                        <defs>
                            <linearGradient id="paint0_linear_6:37" x1="356.5" y1="0" x2="356.5" y2="713" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4A6CF7"></stop>
                                <stop offset="1" stopColor="#1E3BB3"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>
        </section>
    )
}

export default Intro