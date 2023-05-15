import styled from "styled-components";
import bookmark from  "./bookmark.png"
import productIcon from  "./productIcon.png"


const DropdownMenu = styled.div`
  position: absolute;
  left: -110px;
  right: 0%;
  top: 50.79%;
  bottom: 0%;
  height: 120px;
  width: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);



  background: #FFFFFF;
  border-radius: 12px;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
`;

const MenuItem = styled.div`
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
const User = styled.div`
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
 color: #000000;
  margin-left: 15px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 8px 0;
`;

const MenuIcon = styled.img`
width: 20px;
height: 20px;
margin-right: 15px;

`;

export function MenuList({ handleMenuClick, isMenuOpen }) {
  return (
    <DropdownMenu>
        <User>OOO님, 안녕하세요!</User>
        <Divider /> 
          <MenuItem onClick={() => handleMenuClick('/products/list')}><MenuIcon src={productIcon}/>상품리스트 페이지</MenuItem>
        <Divider />
          <MenuItem onClick={() => handleMenuClick('/bookmark')}><MenuIcon src={bookmark}/>북마크 페이지</MenuItem>
    </DropdownMenu>
  );
};

export default MenuList;
