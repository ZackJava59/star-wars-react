import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const {hero} = useContext(SWContext);
    return (
        <header className={'rounded-t-2xl bg-grey-color mb-5'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-5">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;