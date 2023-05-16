import Product from "Components/ItemList/Items/Product";
import Brand from "Components/ItemList/Items/Brand";
import Category from "Components/ItemList/Items/Category";
import Exhibition from "Components/ItemList/Items/Exhibition";

const ItemFilter = ({ items,bookmark }) => {
  
  if (items.type === "Product") {
      return (
        <Product
        items={items}
        bookmark={bookmark}
        />
      );
    } else if (items.type === "Category") {
      return (
        <Category
        items={items}
        bookmark={bookmark}

        />
      );
    } else if (items.type === "Brand") {
      return (
        <Brand
        items={items}
        bookmark={bookmark}

        />
      );
    } else if (items.type === "Exhibition") {
      return (
        <Exhibition
        items={items}
        bookmark={bookmark}

        />
      );
    } else {
      return null;
    }
  };

  export default ItemFilter;