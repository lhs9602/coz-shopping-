
import { MenuIcon } from "./MenuStyles.css";
import MenuList from "Components/Common/menuList/MenuList.js";
import useRedirect from 'Hooks/useRedirect/useRedirect.js';
import { useState } from "react";

export default function Menu() {
    const redirect = useRedirect();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (url) => {
        redirect(url);
    };

    const handleMenuHover = () => {
        setMenuOpen(true);
    };

    const handleMenuHoverLeave = () => {
        setTimeout(() => {
            setMenuOpen(false);
        }, 5000);
    };

    return (
        <MenuIcon onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHoverLeave}>
            <MenuList handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
        </MenuIcon>
    );
}
