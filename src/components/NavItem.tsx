import Button from "../uicomponents/Button.tsx";
import {NavProps} from "../utils/type";

interface NavItemProps extends NavProps {
    itemTitle: string;
}

const NavItem = ({itemTitle, changePage}:NavItemProps) => {
    return (
        <li onClick={() => changePage(itemTitle)}><Button
            className={'border-black border-2 px-3 py-2'}>{itemTitle}</Button></li>
    );
};

export default NavItem;


