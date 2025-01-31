import Button from "./Button.jsx";

const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)}><Button className={'border-black border-2 px-3 py-2'}>{itemTitle}</Button></li>
    );
};

export default NavItem;


