import Navigation from "./Navigation.tsx";
import {NavProps} from "../utils/type";

const Header = ({changePage}: NavProps) => {
    return (
        <header className={'rounded-t-2xl bg-grey-color mb-5'}>
            <Navigation changePage={changePage}/>
            <h1 className="text-center text-3xl py-5">Luke Skywalker</h1>
        </header>
    );
};

export default Header;