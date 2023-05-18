
import { LogoImg } from "./LogoStyles.css";
import useRedirect from 'Hooks/useRedirect/useRedirect.js';

export default function Logo() {
    const redirect = useRedirect();

    const handleLogoClick = (url) => {
        redirect(url);
    };

    return (
        <LogoImg onClick={() => handleLogoClick('/')}>
        </LogoImg>
    );
}
