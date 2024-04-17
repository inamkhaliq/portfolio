import React from 'react'

const Skills = () => {
    let Skills = [
        {
            image: "<svg></svg>",
            name: "Front-End Development",
            tags: [
                    "React", 
                    "Redux ToolKit",
                    "JavaScript", 
                    "Tailwind CSS", 
                    "Bootstrap", 
                    "Material UI", 
                    "HTML5", 
                    "CSS3", 
                    "Redux",
                ],
        },
        {
            image: "",
            name: "Back-End Development",
            tags: ["Node", "Express", "GraphQL", "MongoDB", "RestAPI's",]
        }
    ]

    return (
        <section id='Skills'>
            <div className='max-w-screen-xl px-10 py-28 m-auto'>
                <div className='text-center mb-16'>
                    <p className='text-myBlue font-bold text-lg mb-2 '>What I Offer?</p>
                    <h1 className='font-bold text-5xl mb-5'>My Skills</h1>
                    <p className='font-medium text-gray-500 max-w-xl m-auto'>
                        Here's a brief summary of my primary technical skills and the tools I utilize:
                    </p>
                </div>
                <div className='flex flex-wrap justify-center '>
                    {
                        Skills.map((skill, indx) => {
                            return (
                                <div key={indx} className='px-4  lg:max-w-[33.33333%] md:max-w-[50%] xl:max-w-[25%]  max-w-full'>
                                    <div className='relative duration-300 transition-all group px-8 py-10 mb-8 shadow-xl rounded-xl bg-myBlue text-white text-center hover:bg-blue-700 hover:text-white'>
                                        <div className='inline-block rounded-full bg-white p-5 mb-3 group-hover:bg-white'>
                                            {/* <img
                                                className='object-cover'
                                                src="https://www.svgrepo.com/show/497627/user-search.svg"
                                                width={50}
                                                height={50}
                                                alt=""
                                            /> */}
                                            {
                                                indx==0?<>
                                                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2px" xmlns="http://www.w3.org/2000/svg">
                                                        <defs>
                                                        </defs>
                                                        <g id="roll_brush" data-name="roll brush">
                                                            <polyline className="cls-1" points="8.14 17.8 5.26 14.92 8.14 12.04" />
                                                            <polyline className="cls-1" points="15.81 17.8 18.69 14.92 15.81 12.04" />
                                                            <line className="cls-1" x1="10.06" y1="17.8" x2="13.89" y2="12.04" />
                                                            <rect className="cls-1" x="1.43" y="1.49" width="21.1" height="21.1" />
                                                            <polygon className="cls-1" points="22.53 7.25 16.25 7.25 14.33 7.25 1.43 7.25 1.43 1.49 22.53 1.49 22.53 7.25" />
                                                            <line className="cls-1" x1="4.3" y1="4.37" x2="6.22" y2="4.37" />
                                                            <line className="cls-1" x1="8.14" y1="4.37" x2="10.06" y2="4.37" />
                                                            <line className="cls-1" x1="11.98" y1="4.37" x2="13.89" y2="4.37" />
                                                        </g>
                                                    </svg>
                                                </>:indx==1?<>
                                                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path 
                                                            fillRule="evenodd" clipRule="evenodd" d="M3.25 6C3.25 4.45831 4.48029 3.26447 6.00774 2.50075C7.58004 1.7146 9.69967 1.25 12 1.25C14.3003 1.25 16.42 1.7146 17.9923 2.50075C19.5197 3.26447 20.75 4.45831 20.75 6V18C20.75 19.5417 19.5197 20.7355 17.9923 21.4992C16.42 22.2854 14.3003 22.75 12 22.75C9.69967 22.75 7.58004 22.2854 6.00774 21.4992C4.48029 20.7355 3.25 19.5417 3.25 18V6ZM4.75 6C4.75 5.33255 5.31057 4.52639 6.67856 3.84239C8.00168 3.18083 9.88205 2.75 12 2.75C14.118 2.75 15.9983 3.18083 17.3214 3.84239C18.6894 4.52639 19.25 5.33255 19.25 6C19.25 6.66745 18.6894 7.47361 17.3214 8.15761C15.9983 8.81917 14.118 9.25 12 9.25C9.88205 9.25 8.00168 8.81917 6.67856 8.15761C5.31057 7.47361 4.75 6.66745 4.75 6ZM4.75 18C4.75 18.6674 5.31057 19.4736 6.67856 20.1576C8.00168 20.8192 9.88205 21.25 12 21.25C14.118 21.25 15.9983 20.8192 17.3214 20.1576C18.6894 19.4736 19.25 18.6674 19.25 18V14.7072C18.8733 15.0077 18.4459 15.2724 17.9923 15.4992C16.42 16.2854 14.3003 16.75 12 16.75C9.69967 16.75 7.58004 16.2854 6.00774 15.4992C5.55414 15.2724 5.12675 15.0077 4.75 14.7072V18ZM19.25 8.70722V12C19.25 12.6674 18.6894 13.4736 17.3214 14.1576C15.9983 14.8192 14.118 15.25 12 15.25C9.88205 15.25 8.00168 14.8192 6.67856 14.1576C5.31057 13.4736 4.75 12.6674 4.75 12V8.70722C5.12675 9.00772 5.55414 9.27245 6.00774 9.49925C7.58004 10.2854 9.69967 10.75 12 10.75C14.3003 10.75 16.42 10.2854 17.9923 9.49925C18.4459 9.27245 18.8733 9.00772 19.25 8.70722Z" 
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </>:
                                                ""
                                            }
                                            
                                        </div>
                                        <h3 className='text-2xl mb-3 font-bold'>{skill.name}</h3>
                                        <div className='tags flex flex-wrap gap-2 justify-center'>
                                            {
                                                skill.tags.map((tag, indx) => {
                                                    return (
                                                        <span key={indx} className='px-3 py-1 bg-[#acb6c5] text-white rounded-full text-sm '>{tag}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <span className="absolute right-0 top-0">
                                                <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                                                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                                                </svg>
                                            </span>
                                            <span className="absolute left-1 bottom-1">
                                                <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                                                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                                                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                                                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                                                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                                                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                                                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                                                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                                                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                                                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                                                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                                                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className='px-4 lg:max-w-[33.33333%] md:max-w-[50%] xl:max-w-[25%] max-w-full'>
                        <div className='relative duration-300 transition-all group px-8 py-10 mb-8 shadow-xl rounded-xl text-center hover:bg-myBlue hover:text-white'>
                            <div className='inline-block rounded-full bg-myBlue p-3 mb-3 group-hover:bg-white'>
                                <img
                                    className='object-cover'
                                    src="https://www.svgrepo.com/show/497627/user-search.svg"
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </div>
                            <h3 className='text-2xl mb-3 font-bold'>User Research</h3>
                            <p className='font-medium text-gray-500 group-hover:text-white max-w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                            <div>
                                <span className="absolute right-0 top-0">
                                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                                        <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                                    </svg>
                                </span>
                                <span className="absolute left-1 bottom-1">
                                    <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                                        <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                                        <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                                        <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                                        <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                                        <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                                        <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                                        <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                                        <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                                        <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                                        <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                                        <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 lg:max-w-[33.33333%] md:max-w-[50%] xl:max-w-[25%] max-w-full'>
                        <div className='relative duration-300 transition-all group px-8 py-10 mb-8 shadow-xl rounded-xl text-center hover:bg-myBlue hover:text-white'>
                            <div className='inline-block rounded-full bg-myBlue p-3 mb-3 group-hover:bg-white'>
                                <img
                                    className='object-cover'
                                    src="https://www.svgrepo.com/show/497627/user-search.svg"
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </div>
                            <h3 className='text-2xl mb-3 font-bold'>User Research</h3>
                            <p className='font-medium text-gray-500 group-hover:text-white max-w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                            <div>
                                <span className="absolute right-0 top-0">
                                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                                        <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                                    </svg>
                                </span>
                                <span className="absolute left-1 bottom-1">
                                    <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                                        <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                                        <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                                        <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                                        <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                                        <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                                        <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                                        <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                                        <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                                        <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                                        <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                                        <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 lg:max-w-[33.33333%] md:max-w-[50%] xl:max-w-[25%] max-w-full'>
                        <div className='relative duration-300 transition-all group px-8 py-10 mb-8 shadow-xl rounded-xl text-center hover:bg-myBlue hover:text-white'>
                            <div className='inline-block rounded-full bg-myBlue p-3 mb-3 group-hover:bg-white'>
                                <img
                                    className='object-cover'
                                    src="https://www.svgrepo.com/show/497627/user-search.svg"
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </div>
                            <h3 className='text-2xl mb-3 font-bold'>User Research</h3>
                            <p className='font-medium text-gray-500 group-hover:text-white max-w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                            <div>
                                <span className="absolute right-0 top-0">
                                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                                        <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                                    </svg>
                                </span>
                                <span className="absolute left-1 bottom-1">
                                    <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                                        <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                                        <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                                        <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                                        <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                                        <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                                        <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                                        <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                                        <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                                        <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                                        <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                                        <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Skills