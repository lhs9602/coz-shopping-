import AllImge from "./All.png";
import ProductImge  from "./Product.png";
import CategoryImge  from "./Category.png";
import BrandImge  from "./Brand.png";
import ExhibitionImge  from "./Exhibition.png";
import {ProductWrapper,TabContent} from "./ProductTabItemStyles.css";




const ImgSelector = (name)=>{
    if(name==="All"){
        return AllImge;
    }
    else if(name==="Product"){
        return ProductImge;
    }
    else if(name==="Category"){
        return CategoryImge;
    }
    else if(name==="Brand"){
        return BrandImge;
    }
    else if(name==="Exhibition"){
        return ExhibitionImge;
    }
}

export default function ProductTabItem({name,content,handleTabClick,selectedTab}){
    
    

    return(
        <ProductWrapper onClick={()=>{handleTabClick(name)}}
        >
            <img src={ImgSelector(name)} alt="name"/>
            <TabContent className={selectedTab !== name ? "submenu" : "focused"} 
>{content}</TabContent>
        </ProductWrapper>
    )
}