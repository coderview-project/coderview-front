
const Navb =() => {
    let Links =[
        {name:"HOME", link:"/"},
        {name:"LOGIN", link:"/"},
        {name:"REGISTRO", link:"/"},
        {name:"SOBRE CODERVIEW", link:"/"},
        {name:"CONTACTO", link:"/"},

    ]
    return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className="md:flex items-center justity-between bg-white py-4 md:px-10 px-7">
            <span className="px-10 px-7">
            <img
            src="/CodeF5.png"
            width="120"
            height="50"
            alt="logo CodeRview" />
            </span>
        
        <ul className="md:flex md:items-center">
            {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-lg'>
                        <a href={link.link} className=" hover:text-orange-400 duration-500">{link.name}</a>
                    </li>
                ))
            }
        </ul>
        </div>
    </div>

    )
}

export default Navb