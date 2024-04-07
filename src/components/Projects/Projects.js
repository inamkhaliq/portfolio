import React, { useState } from 'react'

const Projects = () => {
    let [tab,setTab]=useState("All");
    let Projects=[
        {
            title:"",
            image:"",
            live_Link:"",
            repo_Link:"",
            category:"",
        },
    ]
  return (
    <section id='Projects' className='bg-[#f8f9ff]'>
        <div className='max-w-screen-xl px-10 py-28 m-auto'>
            <div className='text-center mb-16'>
                <p className='text-myBlue font-bold text-lg mb-2 '>Creative Projects</p>
                <h1 className='font-bold text-5xl mb-5'>Recent Work</h1>
                <p className='font-medium text-gray-500 max-w-xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</p>
            </div>
            <div className='tabs text-center '>
                <ol className='mb-12 flex flex-wrap list-none text-gray-500 justify-center items-center '>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab=="All"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>All</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab=="React.Js"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>React.Js</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab=="TypeScript"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>TypeScript</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab=="Next.JS"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>Next.JS</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab=="GatsBy.js"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>GatsBy.js</li>
                </ol>
            </div>
            <div className='max-w-[80%] m-auto flex flex-wrap justify-center'>
                <div className='px-2 lg:max-w-[50%] cursor-pointer'>
                    <div className='mb-12'>
                        <div className='w-full mb-8 rounded-2xl'>
                            <img 
                                className='max-w-[100%] object-cover ' 
                                src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg" 
                                alt="" 
                            />
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img
                                className='object-cover'
                                width={25} 
                                src={"https://www.svgrepo.com/show/146361/live.svg"} 
                                alt="" 
                            />
                            <a href='' className=' font-bold text-xl  hover:text-myBlue'>Project Nema</a>
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img 
                                className='object-cover'
                                width={25}
                                src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                alt="" 
                            />
                            <span className='text-base text-gray-500 font-bold hover:text-myBlue'>Github Repositery</span>
                        </div>
                    </div>
                </div>
                <div className='px-2 lg:max-w-[50%] cursor-pointer'>
                    <div className='mb-12'>
                        <div className='w-full mb-8 rounded-2xl'>
                            <img 
                                className='max-w-[100%] object-cover ' 
                                src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg" 
                                alt="" 
                            />
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img
                                className='object-cover'
                                width={25} 
                                src={"https://www.svgrepo.com/show/146361/live.svg"} 
                                alt="" 
                            />
                            <a href='' className=' font-bold text-xl  hover:text-myBlue'>Project Nema</a>
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img 
                                className='object-cover'
                                width={25}
                                src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                alt="" 
                            />
                            <span className='text-base text-gray-500 font-bold hover:text-myBlue'>Github Repositery</span>
                        </div>
                    </div>
                </div>
                <div className='px-2 lg:max-w-[50%] cursor-pointer'>
                    <div className='mb-12'>
                        <div className='w-full mb-8 rounded-2xl'>
                            <img 
                                className='max-w-[100%] object-cover ' 
                                src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg" 
                                alt="" 
                            />
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img
                                className='object-cover'
                                width={25} 
                                src={"https://www.svgrepo.com/show/146361/live.svg"} 
                                alt="" 
                            />
                            <a href='' className=' font-bold text-xl  hover:text-myBlue'>Project Nema</a>
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img 
                                className='object-cover'
                                width={25}
                                src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                alt="" 
                            />
                            <span className='text-base text-gray-500 font-bold hover:text-myBlue'>Github Repositery</span>
                        </div>
                    </div>
                </div>
                <div className='px-2 lg:max-w-[50%] cursor-pointer'>
                    <div className='mb-12'>
                        <div className='w-full mb-8 rounded-2xl'>
                            <img 
                                className='max-w-[100%] object-cover ' 
                                src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg" 
                                alt="" 
                            />
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img
                                className='object-cover'
                                width={25} 
                                src={"https://www.svgrepo.com/show/146361/live.svg"} 
                                alt="" 
                            />
                            <a href='' className=' font-bold text-xl  hover:text-myBlue'>Project Nema</a>
                        </div>
                        <div className='flex justify-start items-center mb-4 gap-3'>
                            <img 
                                className='object-cover'
                                width={25}
                                src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                alt="" 
                            />
                            <span className='text-base text-gray-500 font-bold hover:text-myBlue'>Github Repositery</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects