import ProductScreen from "Components/Common/productScreen/ProductScreen";
import {useSelector} from 'react-redux';

export default function ProductPage() {
    const products = useSelector((state) => state.data);

    return (
    <> 
    <ProductScreen  products = {products} /> 
    </>
    );
}
