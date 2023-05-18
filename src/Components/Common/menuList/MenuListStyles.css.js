import styled from "styled-components";


export const DropdownMenu = styled.div`
  position: absolute;
  left: -110px;
  right: 0%;
  top: 50.79%;
  bottom: 0%;
  height: 120px;
  width: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

z-index: 999;

  background: #FFFFFF;
  border-radius: 12px;
`;

export const MenuItem = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 88.02%;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 18px;
`;
export const User = styled.div`
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
 color: #000000;
  margin-left: 15px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 8px 0;
`;

export const MenuIcon = styled.img`
width: 20px;
height: 20px;
margin-right: 15px;

`;

