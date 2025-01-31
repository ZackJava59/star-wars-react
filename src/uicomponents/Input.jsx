const Input = ({className = '', children, ...props}) => {
    return (
        <label> {children}:
            <input
                className={`w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y autofill-fix ${className}`}
                {...props}/>
        </label>
    );
};

export default Input;