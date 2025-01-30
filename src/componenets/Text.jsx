const Text = ({children}) => {
    return (
        <div className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[0.2em]'}>
            {children}
        </div>
    );
};

export default Text;

