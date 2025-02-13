import Navigation from "./Navigation.tsx";
import {useLocation} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";

const Header = () => {
    const location = useLocation();
    const heroId = location.pathname.includes("/about_me/") ? location.pathname.split("/").pop() : characters[defaultHero].name

    ;
    return (
        <header className={'rounded-t-2xl bg-grey-color mb-5'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-5">{heroId}</h1>
        </header>
    );
};

export default Header;