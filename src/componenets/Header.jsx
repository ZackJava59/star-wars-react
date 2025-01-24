import Navigation from "./Navigation.jsx";

const Header = ({changePage}) => {
    return (
        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation changePage={changePage}/>
            <h1 className="text-center text-5xl py-5">Luke Skywalker</h1>
        </header>
    );
};

export default Header;