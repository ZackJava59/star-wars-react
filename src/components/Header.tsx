import Navigation from "./Navigation.tsx";

const Header = () => {

    return (
        <header className={'rounded-t-2xl bg-grey-color mb-5'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-5">Luke Skywalker</h1>
        </header>
    );
};

export default Header;