
import Icon from "./아이콘.jpg";
import styled from "styled-components";

export const MenuIcon = styled.div`
   background-image: url(${Icon});
   position: absolute;
   height: 24px;
   width: 30px;
   display: flex;
   justify-content: end;
   left: 91.5%;
   right: 5.94%;
   top: 31.25%;
   bottom: 31.25%;
   &:hover {
      cursor: pointer;
   }
`;
