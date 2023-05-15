import styled from "styled-components"
import logo from "./logo.png"
import useRedirect from 'Hooks/useRedirect/useRedirect.js';


const LogoImg=styled.div`
	background-image: url(${logo});
height: 30px;
width: 55px;
left: 76px;
top: 25px;
border-radius: 0px;
position: absolute;
left: 5.94%;
right: 89.77%;
top: 31.25%;
bottom: 31.25%;
cursor: pointer;
`;   

export default function Logo(){
    const redirect = useRedirect();
    const handleLogoClick = (url) => {
        redirect(url);
      };
    return (
        <LogoImg onClick={handleLogoClick('/')}>
        </LogoImg>
    );
}