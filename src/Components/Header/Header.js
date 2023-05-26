import Logo from "../Common/logo/Logo.js";
import Menu from "../Common/menu/Menu.js";
import { HeaderBar, Titles } from "./HeaderStyles.css";

export default function Header({primary="COZ Shopping"}) {
    return (
        <HeaderBar>
            <Logo />
            <Titles>{primary}</Titles>
            <Menu/>
        </HeaderBar>
    );
}
