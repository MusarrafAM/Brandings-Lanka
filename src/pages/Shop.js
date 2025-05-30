import products from "../data/products.json";
import EachGlassCard from "../components/EachGlassCard";
import Filter from "../components/Filter";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import FilterModal from "../components/FilterModal";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 10;

  // Filtering by price logic
  const handleFilter = (priceRange) => {
    const [minPrice, maxPrice] = priceRange;
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (searchText) => {
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Calculate counts for each category
  const categoryCounts = products.reduce((acc, product) => {
    product.categories.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  // below is the same Calculate counts for each category but easily understandable version.

  // const categoryCounts = {};

  // products.forEach((product) => {
  //   product.categories.forEach((category) => {
  //     if (categoryCounts[category]) {
  //       categoryCounts[category] += 1;
  //     } else {
  //       categoryCounts[category] = 1;
  //     }
  //   });
  // });

  const handleCategoryFilter = (category) => {
    const filtered = products.filter((product) =>
      product.categories.includes(category)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage, //calculates the Start index for the current page.
    currentPage * itemsPerPage // calculates the ending index for the current page.
  );

  //Eg - page 1 == (1-1) * 10 = 0   so it get the item from the 0th index.
  //Eg - page 2 == (2-1) * 10 = 10   so it get the item from the 10th index.

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-2 lg:px-[10%] py-10 lg:h-screen bg-gray-100">
      {/* Filter ModalFor Mobile Device */}
      {/* Filter Modal Button */}
      <div className="md:hidden">
        <div className="flex justify-center w-full">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Open Filter
          </button>
        </div>

        {isModalOpen && (
          <FilterModal
            onSearch={handleSearch}
            onFilter={handleFilter}
            onCategorySelect={handleCategoryFilter}
            categoryCounts={categoryCounts} // Pass counts as props
            onClose={() => setIsModalOpen(false)} // Close the modal
          />
        )}
      </div>

      {/* All Filtered Items */}
      <div className="grid grid-cols-4 mt-10">
        <div className="hidden md:block">
          {/* Normal Filter */}
          <Filter
            onSearch={handleSearch}
            onFilter={handleFilter}
            onCategorySelect={handleCategoryFilter}
            categoryCounts={categoryCounts} // Pass counts as props
          />
        </div>

        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {paginatedProducts.map((product, index) => (
              <EachGlassCard key={index} {...product} />
            ))}
          </div>

          {filteredProducts.length > itemsPerPage && (
            <div className="flex  justify-center mt-6">
              <Pagination
                count={totalPages}
                onChange={handlePageChange}
                color="primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Shop;
