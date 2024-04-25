import React from 'react'

const Footer = () => {
    return (
        <section className='bg-blue-700'>
            <div className="max-w-screen-xl m-auto">
                <div className="flex flex-col items-center px-4 py-4 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
                    <a href="" className="flex cursor-pointer items-center whitespace-nowrap font-black">
                        <div className="flex items-center">
                            <svg width="40" height="40" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 2.5H33.5V33.5H2.5V2.5Z" stroke="white" strokeWidth="5"/>
                                <path d="M10 10H26V26L10 10Z" fill="white"/>
                                <path opacity="0.5" d="M15.5 20.5C17.5296 22.5296 16.0922 26 13.2218 26C11.4425 26 10 24.5575 10 22.7782C10 19.9078 13.4704 18.4704 15.5 20.5Z" fill="white"/>
                            </svg>                            
                            <p className="ml-2 text-lg font-semibold text-white">
                                Inam Protfolio
                            </p>
                        </div>
                    </a>
                    <p className="text-sm text-center text-white ">
                        © 2024 All Right Reserved by Inam
                    </p>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer