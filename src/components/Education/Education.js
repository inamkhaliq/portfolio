import React from 'react'

const Education = () => {
    let Education=[
        {
            degree:"Matriculation",
            institute:"Government Comprehensive Higher Secondary School",
            city:"Faisalabad",
            yearoP:"2012-2014",
            details:"I have completed my matriculation in 2014 by scoring 692 marks out of 1100. My major subjects were Bio-Science",
            web:"https://www.facebook.com/Comprehensive.Fsd"
        },
        {
            degree:"Intermediate",
            institute:"The Summit College",
            city:"Faisalabad",
            yearoP:"2014-2016",
            details:"Completed my FSc Pre-Engineering by scoring 654 marks. Major Subjects were Mathematis Chemitry and Physics",
            web:"https://www.facebook.com/SummitGroupofColleges"
        },
        {
            degree:"BSCS",
            institute:"Government College University",
            city:"Faisalabad",
            yearoP:"2016-2020",
            details:"Fortunately or not but yes i completed my Bachelor's degree durning the COVID-19 year but that's the very unfortune for me.I have secure 3.41 CGPA out of 4.0. My major subjects were Computer Engineerning ",
            web:"https://gcuf.edu.pk"
        },
        {
            degree:"Web Development Deploma",
            institute:"Future Tech Institute",
            city:"Faisalabad",
            yearoP:"2015-2016",
            details:"Deploma in Web Development from the very initionals of my life carrer",
            web:"#"
        },
        {
            degree:"Accounts Officer",
            institute:"PEART Agro Chemicals",
            city:"Faisalabad",
            yearoP:"july 2021 - November 2022",
            details:"I worked as a account officer, durning this i have learn so much and faced alot of new experiences. worked as team, warehouse inspactions accounts information and new customer accounts in software ",
            web:"https://www.facebook.com/peartagrochemicals"
        },
    ]
    return (
        <section id='Education'>
        <div className='max-w-screen-xl m-auto px-10 py-28'>
            <div className='text-center mb-16'>
                <p className='text-myBlue font-bold text-lg mb-2 '>Education & Experience</p>
                <h1 className='font-bold text-5xl mb-5'>My Education</h1>
                <p className='font-medium text-gray-500 max-w-xl m-auto'>Eduction along with the Work Experience </p>
            </div>
            {Education.map((edu,indx)=>{
                return(
                    <div key={indx} className='py-4 relative'>
                        <span className='w-[1px] h-full absolute block left-2 top-0 bg-gray-500'></span>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full px-4 '>
                                <div className='pl-11 pb-12 w-full ml-auto relative'>
                                    <span className='bg-white border-[4px] rounded-full w-4 h-4 top-1 left-0 absolute border-myBlue'></span>
                                    <h3 className='text-[#090e34] font-bold text-xl mb-1 '>{edu.degree}</h3>
                                    <p className='text-gray-500 font-bold text-base mb-5 '>
                                        <a href={edu.web} className='hover:text-myBlue'>
                                            {edu.institute} | {edu.city}
                                        </a>
                                    </p>
                                    <span className='text-white font-bold text-xs pb-2 pt-2 pl-4 pr-4 bg-myBlue rounded-full justify-center items-center mb-5 '>{edu.yearoP}</span>
                                    <p className='text-gray-500 mt-5 font-semibold text-base m-auto'>{edu.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Education