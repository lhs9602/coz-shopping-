import Product from "Components/ItemList/Items/Product";
import Brand from "Components/ItemList/Items/Brand";
import Category from "Components/ItemList/Items/Category";
import Exhibition from "Components/ItemList/Items/Exhibition";

export default  function ItemFilter(items){
    if (items.type === "Product") {
      return (
        <Product
        items={items}

        />
      );
    } else if (items.type === "Category") {
      return (
        <Category
        items={items}
        />
      );
    } else if (items.type === "Brand") {
      return (
        <Brand
        items={items}
        />
      );
    } else if (items.type === "Exhibition") {
      return (
        <Exhibition
        items={items}
        />
      );
    } else {
      return null;
    }
  };