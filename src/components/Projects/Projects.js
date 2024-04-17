import React, { useState } from 'react'

const Projects = () => {
    let [tab,setTab]=useState("All");
    let Projects=[
       
        {
            id:2,
            title:"Shoe Store",
            image:"./ShoeStore.png",
            live_Link:"https://jade-amused-angler.cyclic.app/",
            repo_Link:"https://github.com/inamkhaliq/Feet-wair-Paradise",
            tags:["React","Tailwind","Express","Node","Redux","Mongoose","GraphQL"],
            type:"React",
        },
        {   
            id:1,
            title:"Expense Tracker",
            image:"./ExpenseTracker.png",
            live_Link:"https://expensetracker-by-inam.netlify.app/",
            repo_Link:"https://github.com/inamkhaliq/expensetracker",
            tags:["React","Tailwind","Html 5","CSS","Java Script"],
            type:"React",
        },
        {   
            id:3,
            title:"Bucket Store",
            image:"./BucketStore.png",
            live_Link:"https://bucket-store.vercel.app/",
            repo_Link:"https://github.com/inamkhaliq/Bucket-Store",
            tags:["Material UI","Redux ToolKit","Html 5","CSS","Java Script"],
            type:"Next",
        },
        {   
            id:4,
            title:"Quiz Application",
            image:"./QuizApplication.png",
            live_Link:"https://quiz-app-sand-chi.vercel.app/",
            repo_Link:"https://github.com/inamkhaliq/Quiz-App",
            tags:["Material UI","Quiz API","React"],
            type:"TypeScript",
        },
        {   
            id:5,
            title:"Mini Blogs",
            image:"./MiniBlogs.png",
            live_Link:"#",
            repo_Link:"https://github.com/inamkhaliq/Gatsby-Static-Blogs",
            tags:["Tailwind","React","Html 5","CSS","Java Script"],
            type:"GatsBy",
        },
        {   
            id:6,
            title:"Portfolio",
            image:"./Portfolio.png",
            live_Link:"https://portfolio-five-zeta-54.vercel.app/",
            repo_Link:"https://github.com/inamkhaliq/Gatsby-Static-Blogs",
            tags:["Tailwind","React","Html 5","CSS","Java Script","CSS3"],
            type:"React",
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
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab==="All"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>All</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab==="React"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>React</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab==="TypeScript"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>TypeScript</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab==="Next"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>Next</li>
                    <li onClick={e=>setTab(e.target.innerText)} className={`${tab==="GatsBy"? "bg-myBlue text-white":null} cursor-pointer rounded-full hover:text-white my-2 mx-1 py-2 px-4 hover:bg-myBlue transition-all duration-300 `}>GatsBy</li>
                </ol>
            </div>
            <div className='max-w-[80%] m-auto flex flex-wrap justify-center'>
                {/* <div className='px-2 lg:max-w-[50%] '> */}
                    {
                        Projects.filter((project)=>{
                            if(tab==="All"){
                                return true;
                            }
                            else return project.type===tab;
                        }).map((project,indx)=>{
                            return(
                                <div key={indx} className='px-2 lg:max-w-[50%] '>
                                    <div key={indx} className='mb-12'>
                                        <div className='w-full mb-8 rounded-2xl h-64'>
                                            <img 
                                                className='max-w-[100%] object-contain h-full' 
                                                src={project.image} 
                                                alt={project.title}
                                            />
                                        </div>
                                        <div className='flex justify-start items-center mb-4 gap-3'>
                                            <img
                                                className='object-cover'
                                                width={25} 
                                                src={"https://www.svgrepo.com/show/146361/live.svg"} 
                                                alt="" 
                                            />
                                            <a href={project.live_Link} className=' font-bold text-xl  hover:text-myBlue'>{project.title}</a>
                                        </div>
                                        <div className='flex justify-start items-center mb-4 gap-3'>
                                            <img 
                                                className='object-cover'
                                                width={25}
                                                src="https://www.svgrepo.com/show/512317/github-142.svg" 
                                                alt="" 
                                            />
                                            <a href={project.repo_Link} className='text-base text-gray-500 font-bold hover:text-myBlue'>Github Repositery</a>
                                        </div>
                                        <div className='tags flex flex-wrap gap-2'>
                                            {
                                                project.tags.map((tag,indx)=>{
                                                    return (
                                                        <span key={indx} className='px-3 py-1 bg-[#acb6c5] text-white rounded-full text-sm '>{tag}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                {/* </div> */}
                {/* <div className='px-2 lg:max-w-[50%] cursor-pointer'>
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
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Projects