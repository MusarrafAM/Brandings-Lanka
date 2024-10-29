import products from "../data/products.json";
import EachGlassCard from "../components/EachGlassCard";
import Filter from "../components/Filter";
import { useState } from "react";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filtering by price logic
  const handleFilter = (priceRange) => {
    const [minPrice, maxPrice] = priceRange;
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (searchText) => {
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="px-2 lg:px-[10%] py-10">
      <div className="grid grid-cols-4">
        <div className="hidden md:block">
          <Filter onSearch={handleSearch} onFilter={handleFilter} />
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product, index) => (
              <EachGlassCard
                key={index}
                productName={product.productName}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
