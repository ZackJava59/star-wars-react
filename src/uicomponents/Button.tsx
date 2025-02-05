import {baseUI} from "../utils/type";

const Button = ({className = "", children}: baseUI) => {
    return (
        <button
            className={`bg-red-color text-base-color rounded-md cursor-pointer hover:bg-red-500 hover:text-white ${className}`}
        >{children}</button>
    );
};

export default Button;

