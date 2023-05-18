export function filterProducts(products, selectedTab) {
  return products.filter((product) => {
    if (selectedTab === "All") {
      return true;
    } else if (product.type === selectedTab) {
      return true;
    }
    return false;
  });
}

export function fetchFilteredData(products, selectedTab, start, end) {
  const filteredData = filterProducts(products, selectedTab);
  return filteredData.slice(start, end);
}
