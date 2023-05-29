import ProductScreen from "Components/Common/productScreen/ProductScreen";
import {useSelector} from 'react-redux';

export default function BookmarkPage(){
  const rawData = useSelector((state) => state.data);
  const Bookmarkproducts=rawData.filter((el) => el.bookmark === true); 
    return (
    <> 
    <ProductScreen  products = {Bookmarkproducts} /> 
    </>
    );
  }
