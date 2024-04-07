import React, { useRef, useState } from 'react'
import { Link} from 'react-scroll';
const Header = () => {
    let [navbarToggler,setNavbarToggler]=useState(true)
    let showsidebar=()=>{
        if(navbarToggler){
            setNavbarToggler(false);
        }else setNavbarToggler(true)
    }
   
  return (
    <section >
        <div className='max-w-screen-xl px-10 m-auto  bg-RGB 255 255 255/var(--tw-bg-opacity)'>
            <div className='flex justify-between py-8 items-center'>
                {/* logo */}
                <div className='logo '>
                    <a href="">
                        <svg width="165" height="36" viewBox="0 0 165 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.0085 28H53.6974V21.1193H57.5952C62.2983 21.1193 64.8239 18.2955 64.8239 14.3778C64.8239 10.4901 62.3281 7.63636 57.6449 7.63636H50.0085V28ZM53.6974 18.0866V10.7188H57.0781C59.8423 10.7188 61.0653 12.2102 61.0653 14.3778C61.0653 16.5455 59.8423 18.0866 57.098 18.0866H53.6974ZM74.3121 28.2983C78.7866 28.2983 81.6303 25.1463 81.6303 20.4233C81.6303 15.6903 78.7866 12.5284 74.3121 12.5284C69.8377 12.5284 66.994 15.6903 66.994 20.4233C66.994 25.1463 69.8377 28.2983 74.3121 28.2983ZM74.332 25.4148C71.8562 25.4148 70.6431 23.2074 70.6431 20.4134C70.6431 17.6193 71.8562 15.3821 74.332 15.3821C76.7681 15.3821 77.9812 17.6193 77.9812 20.4134C77.9812 23.2074 76.7681 25.4148 74.332 25.4148ZM84.6854 28H88.2848V19.0213C88.2848 17.0824 89.7464 15.7102 91.7251 15.7102C92.3317 15.7102 93.0874 15.8196 93.3956 15.919V12.608C93.0675 12.5483 92.5007 12.5085 92.103 12.5085C90.353 12.5085 88.8913 13.5028 88.3345 15.2727H88.1754V12.7273H84.6854V28ZM104.234 12.7273H101.221V9.06818H97.6214V12.7273H95.4538V15.5114H97.6214V24.0028C97.6016 26.8764 99.6896 28.2884 102.394 28.2088C103.418 28.179 104.124 27.9801 104.512 27.8509L103.906 25.0369C103.707 25.0866 103.299 25.1761 102.852 25.1761C101.947 25.1761 101.221 24.858 101.221 23.4062V15.5114H104.234V12.7273ZM114.98 12.7273H111.808V11.5241C111.808 10.331 112.305 9.66477 113.647 9.66477C114.214 9.66477 114.691 9.79403 114.99 9.88352L115.716 7.09943C115.248 6.94034 114.224 6.68182 112.981 6.68182C110.326 6.68182 108.208 8.20312 108.208 11.2855V12.7273H105.951V15.5114H108.208V28H111.808V15.5114H114.98V12.7273ZM123.886 28.2983C128.361 28.2983 131.205 25.1463 131.205 20.4233C131.205 15.6903 128.361 12.5284 123.886 12.5284C119.412 12.5284 116.568 15.6903 116.568 20.4233C116.568 25.1463 119.412 28.2983 123.886 28.2983ZM123.906 25.4148C121.43 25.4148 120.217 23.2074 120.217 20.4134C120.217 17.6193 121.43 15.3821 123.906 15.3821C126.342 15.3821 127.555 17.6193 127.555 20.4134C127.555 23.2074 126.342 25.4148 123.906 25.4148ZM137.859 7.63636H134.26V28H137.859V7.63636ZM141.56 28H145.16V12.7273H141.56V28ZM143.37 10.5597C144.513 10.5597 145.448 9.68466 145.448 8.61079C145.448 7.52699 144.513 6.65199 143.37 6.65199C142.217 6.65199 141.282 7.52699 141.282 8.61079C141.282 9.68466 142.217 10.5597 143.37 10.5597ZM155.523 28.2983C159.998 28.2983 162.841 25.1463 162.841 20.4233C162.841 15.6903 159.998 12.5284 155.523 12.5284C151.049 12.5284 148.205 15.6903 148.205 20.4233C148.205 25.1463 151.049 28.2983 155.523 28.2983ZM155.543 25.4148C153.067 25.4148 151.854 23.2074 151.854 20.4134C151.854 17.6193 153.067 15.3821 155.543 15.3821C157.979 15.3821 159.192 17.6193 159.192 20.4134C159.192 23.2074 157.979 25.4148 155.543 25.4148Z" fill="#090E34"/>
                            <path d="M2.5 2.5H33.5V33.5H2.5V2.5Z" stroke="#4A6CF7" strokeWidth="5"/>
                            <path d="M10 10H26V26L10 10Z" fill="#4A6CF7"/>
                            <path opacity="0.5" d="M15.5 20.5C17.5296 22.5296 16.0922 26 13.2218 26C11.4425 26 10 24.5575 10 22.7782C10 19.9078 13.4704 18.4704 15.5 20.5Z" fill="#4A6CF7"/>
                        </svg>
                    </a>
                </div>
                {/* menun + resume */}
                <div className='flex justify-end items-center w-full'>
                    {/* menu + toggle button */}
                    <div className='menu text-[#090e34] md:order-1 order-2 '>
                        <div className={`${navbarToggler?"hidden":"block"} w-60 z-10 md:w-full md:shadow-none md:py-0 py-5 shadow-lg rounded-lg md:rounded-none md:block md:relative absolute top-[14%] right-[4%]  bg-white`}>
                            <ul className='block md:flex list-none text-base    '>
                                <li className='hover:text-myBlue md:mx-5 py-2 mx-8'>
                                    <Link className='cursor-pointer' to='/'>Home</Link>
                                </li>
                                <li className='md:mx-5 py-2 mx-8 hover:text-myBlue'>
                                    <Link className='cursor-pointer' to='About' spy={true} smooth={true} offset={0}>About</Link>
                                </li>
                                <li className='md:mx-5 py-2 mx-8 hover:text-myBlue'>
                                    <Link className='cursor-pointer' to='Skills' spy={true} smooth={true} offset={0}>Skills</Link>
                                </li>
                                <li className='md:mx-5 py-2 mx-8 hover:text-myBlue'>
                                    <Link className='cursor-pointer' to='Education' spy={true} smooth={true} offset={0}>Education</Link>
                                </li>
                                <li className='md:mx-5 py-2 mx-8 hover:text-myBlue'>
                                    <Link className='cursor-pointer' to='Projects' spy={true} smooth={true} offset={0}>Projects</Link>
                                </li>
                            </ul>
                        </div>
                        <div onClick={showsidebar} className='md:hidden ml-6 '>
                            <button className="kb d h i/2 bd hl bj zh ff gf qd"  id="">
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='md:order-2 order-1'>
                        <a href="" className='px-9 py-3 text-white text-xl rounded-full font-bold transition-all bg-myBlue hover:shadow-lg  duration-300'>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header