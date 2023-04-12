
import { useState } from "react";

const Navb =() => {
    let Links =[
        {name:"HOME", link:"/"},
        {name:"LOGIN", link:"/"},
        {name:"REGISTRO", link:"/"},
        {name:"SOBRE CODERVIEW", link:"/"},
        {name:"CONTACTO", link:"/"},

    ];

    let [open,setOpen]=useState(false);

    return (
    <div className='shadow-md w-full fixed top-0 left-0 '>
        <div className="md:flex items-center justity-between bg-white py-6 md:px-10 px-7">
            <span className="px-10 px-7">
            <img
            src="/CodeF5.png"
            width="170"
            height="50"
            alt="logo CodeRview" />
            </span>
        <div onClick={()=>setOpen(!open)}  className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <svg name={open ? 'close': 'menu'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div/>
    </div>
        <ul className={`md:flex md:items-center md: pb-0 pb-5 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0':'top[-490px]'}`}>
            {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-lg  md:my-0 my-4 '>
                        <a href={link.link} className=" hover:text-orange-600 duration-500">{link.name}</a>
                    </li>
                ))
            }
            
        </ul>
        </div>
    </div>

    )
}

export default Navb