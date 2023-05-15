import Product from "Components/ItemList/Items/Product";

export default  function ItemFilter(product){
    if (product.type === "Product") {
      return (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          discount={product.discount}
          bookmark={product.bookmark}
        />
      );
    } else if (product.type === "Category") {
      return (
        <Category
          key={product.id}
        />
      );
    } else if (product.type === "Brand") {
      return (
        <Brand
          key={product.id}
        />
      );
    } else if (product.type === "Exhibition") {
      return (
        <Exhibition
          key={product.id}
        />
      );
    } else {
      return null;
    }
  };