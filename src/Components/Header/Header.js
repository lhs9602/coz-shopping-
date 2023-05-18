import Logo from "../Common/logo/Logo.js";
import Menu from "../Common/menu/Menu.js";
import { HeaderBar, Titles } from "./HeaderStyles.css";

export default function Header() {
    return (
        <HeaderBar>
            <Logo />
            <Titles>COZ Shopping</Titles>
            <Menu/>
        </HeaderBar>
    );
}
