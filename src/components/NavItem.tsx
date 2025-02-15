import {Item} from "../utils/type";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface NavItemProps {
    item: Item;
}

const NavItem = ({item}: NavItemProps) => {
    const{hero}= useContext(SWContext)

    return (
        <NavLink to={`/${item.path}/${hero}`}
                 className={`text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white`}>
            {item.title}
        </NavLink>
    );
};

export default NavItem;


