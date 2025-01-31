const TextArea = ({className = '', children, ...props}) => {
    return (
        <label> {children}:
            <textarea
                className={`w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y h-25 ${className}`}
                {...props}></textarea>
        </label>
    );
};

export default TextArea;