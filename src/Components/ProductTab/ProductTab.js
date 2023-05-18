import styled from "styled-components";
import ProductTabItem  from "Components/Common/ProductTabItem/ProductTabItem";


const ProductTabContainer = styled.div `
display: flex;
position: relative;
  align-items: center;
  justify-content:center;
  padding: 0px;
  gap:70px;
  width: 100%;
  height: 20%;
`;



export default function ProductTab({selectedTab,setSelectedTab}) {
    const catagoryValue = [
    {name:"All",content:"전체"}, 
    {name:"Product",content:"상품"},
    {name:"Category",content:"카테고리"}, 
    {name:"Brand",content:"기획전"}, 
    {name:"Exhibition",content:"브랜드"}
    ];


    const handleTabClick = (name) => {
        if(selectedTab!==name){
        setSelectedTab(name);
        }

    };

    return (
        <ProductTabContainer>
            {
                catagoryValue.map((el,index) => {
                    return (
                        <ProductTabItem key={index} name={el.name} content={el.content} handleTabClick= {handleTabClick}
                        selectedTab={selectedTab}
                        />
                        
                    )
                })
            }

        </ProductTabContainer>
    );
}