import {Item} from "../utils/type";
import {NavLink} from "react-router";

interface NavItemProps {
    item: Item;
}

const NavItem = ({item}: NavItemProps) => {

    return (
        <NavLink to={`/${item.path}`}
                 className={`text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white`}>
            {item.title}
        </NavLink>
    );
};

export default NavItem;


