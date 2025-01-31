import Button from "../uicomponents/Button.jsx";


const Footer = () => {

    return (
        <footer className={'clear-both bg-grey-color h-20 rounded-b-2xl grid grid-cols-7 items-center mt-5'}>
            <Button
                className={'col-start-3 border-2 px-3 py-2'}>Send
                me an <span
                    className={'text-black uppercase'}>email</span>
            </Button>
        </footer>
    );
};

export default Footer;