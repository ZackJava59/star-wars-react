import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constants.ts";
import {NavProps} from "../utils/type";

const Navigation = ({changePage}: NavProps) => {
    return (
        <nav className={'fixed top-2 left-12'}>
            <ul className={'flex gap-2'}>
                {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;