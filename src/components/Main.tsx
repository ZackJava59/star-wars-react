import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import {navItems} from "../utils/constants.ts";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";

interface PageProps {
    page: string;
}

const Main = ({page}: PageProps) => {

    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }

};

export default Main;