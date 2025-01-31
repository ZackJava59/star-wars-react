const Button = ({className= "", children}) => {
    return (
        <button className={`bg-red-color text-base-color rounded-md cursor-pointer hover:bg-red-500 hover:text-white ${className}`}
                >{children}</button>
    );
};

export default Button;

// {'bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white'}