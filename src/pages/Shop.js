import products from "../data/products.json";
import EachGlassCard from "../components/EachGlassCard";
import Filter from "../components/Filter";

const Shop = () => {
  return (
    <div className="px-2 lg:px-[10%] py-10">
      <div className="grid grid-cols-4">
        <div className="hidden md:block">
          <Filter />
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <EachGlassCard
                key={product.productName}
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
