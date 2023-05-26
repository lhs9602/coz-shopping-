import bookmark from  "Components/Common/menuList/bookmark.png"
import productIcon from  "Components/Common/menuList/productIcon.png"
import styled from "styled-components";

const DropdownMenu = styled.div` 
  height: auto;
  width: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  border-radius: 12px;
  padding: 5px;
  gap:20px;
`;

const MenuItem = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 88.02%;
  display: flex;
  flex-grow:1 0 auto;
  cursor: pointer;
  align-items: center;
  color: #000000;
  margin-left: 8px;
  &:hover
  {
   color:#452CDD;
  }
  &:active 
  {
    background-color: #F0F0F0;
  }
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




function ItemBox({ list, primary,images }) {
  return primary ? (
    
    <DropdownMenu>
{list.map((item,idx)=>{
    return (
<>
<MenuItem onClick={() =>{}}>
{images[idx]?<MenuIcon src={images[idx]}/>:null}
{item}
</MenuItem>
{idx!==list.length-1 ?<Divider/>:null}
</>
    )
})}
</DropdownMenu>
  ) : null;
};


export default {
    title: 'atoms/ItemBox', // 스토리 분류 및 컴포넌트 이름
    component: ItemBox, // 테스트할 컴포넌트
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  };

  export const Item= {
    args: {
        primary:true,
        list:['OOO님, 안녕하세요!'],
        images:[null]
    },
  };



  export const ItemBoxs = {
    args: {
        primary:true,
        list:['OOO님, 안녕하세요!','상품리스트 페이지','북마크 페이지'],
        images:[null,bookmark,productIcon,null]
    },
  };
