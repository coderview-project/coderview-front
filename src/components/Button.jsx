
const Button =(props)=> {
    return (
        <button className="bg-orange-500 text-white front-[Poppins] py-0 px-6 rounded md:ml-8 hover:bg-orange-400 duration-500">
            {props.children}
        </button>
    )
}

export default Button