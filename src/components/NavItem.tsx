import Button from "../uicomponents/Button.tsx";
import {useContext} from "react";
import {PageContext} from "../utils/context.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}:NavItemProps) => {
    const context = useContext(PageContext);

    return (
        <li onClick={() => context.setPage(itemTitle)}><Button
            className={'border-black border-2 px-3 py-2'}>{itemTitle}</Button></li>
    );
};

export default NavItem;


