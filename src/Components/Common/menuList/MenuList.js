import bookmark from  "./bookmark.png"
import productIcon from  "./productIcon.png"
import {Divider, MenuIcon,User,MenuItem,DropdownMenu} from "./MenuListStyles.css";



export function MenuList({ handleMenuClick, isMenuOpen }) {
  return isMenuOpen ? (
    <DropdownMenu>
      <User>OOO님, 안녕하세요!</User>
      <Divider /> 
      <MenuItem onClick={() => handleMenuClick('/products/list')}>
        <MenuIcon src={productIcon} />
        상품리스트 페이지
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => handleMenuClick('/bookmark')}>
        <MenuIcon src={bookmark} />
        북마크 페이지
      </MenuItem>
    </DropdownMenu>
  ) : null;
};


export default MenuList;
