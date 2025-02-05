import {baseUI} from "../utils/type";

const TextArea = ({className = '', children, ...props}: baseUI) => {
    return (
        <label> {children}:
            <textarea
                className={`w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y h-25 ${className}`}
                {...props}></textarea>
        </label>
    );
};

export default TextArea;