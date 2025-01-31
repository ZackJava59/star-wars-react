const Select = ({className = '', options = [], children, ...props}) => {
    return (
        <label> {children}
            <select
                className={`w-full p-1.5 border border-solid border-[#ccc] rounded box-border mt-1.5 mb-5 resize-y autofill-fix ${className}`}
                {...props}>
                {options.map(item => (
                    <option className={`text-base-color bg-black`} value={item} key={item}>
                        {item}
                    </option>))}
            </select>
        </label>
    );
};

export default Select;