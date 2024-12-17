import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Slider from "@mui/material/Slider";

const FilterModal = ({
  onFilter,
  onSearch,
  onCategorySelect,
  categoryCounts,
  onClose, // Pass this function to close the modal
}) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [activeCategory, setActiveCategory] = useState(null); // State for active category

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applySearch = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const applyFilter = () => {
    onFilter(priceRange);
  };

  const categories = [
    "Exclusive Premium Collection",
    "Mens Collection",
    "Junior collection",
    "Women’s collection",
  ];

  const handleCategorySelect = (category) => {
    setActiveCategory(category); // Set the active category
    onCategorySelect(category); // Call the passed function
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal content */}
      <div className="bg-white w-full max-w-sm mx-4 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-1 right-1 text-gray-600 hover:text-black 
             text-4xl font-bold w-10 h-10 flex items-center justify-center 
             rounded-full "
          >
            &times;
          </button>

          {/* Searchbar */}
          <form onSubmit={applySearch} className="flex items-center pt-2 mr-6">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-black px-2 py-1 w-full"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button type="submit" className="bg-red-500 ml-[1px] p-2">
              <IoSearch size={20} />
            </button>
          </form>

          {/* Product Categories */}
          <div className="mt-4">
            <h4 className="text-xl text-gray-600 my-6 uppercase font-semibold">
              Product categories
            </h4>

            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center justify-between border-b border-gray-300 py-3 group cursor-pointer"
                onClick={() => handleCategorySelect(category)}
              >
                <p
                  className={`${
                    activeCategory === category
                      ? "text-black font-semibold"
                      : "text-gray-600"
                  } group-hover:text-black`}
                >
                  {category}
                </p>
                <p className="text-xs text-gray-400">
                  ({categoryCounts[category] || 0})
                </p>
              </div>
            ))}
          </div>

          {/* Filter By Price */}
          <div className="mt-10">
            <h4 className="text-xl text-gray-600 uppercase font-semibold">
              Filter by price
            </h4>
            <div className="mt-4">
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={10000}
                step={100}
              />
              <div className="flex justify-between mt-2 text-gray-600">
                <span>Rs. {priceRange[0]}</span>
                <span>Rs. {priceRange[1]}</span>
              </div>
            </div>
            <button
              onClick={applyFilter}
              className="bg-blue-400 px-6 py-1 rounded-full mx-auto block mt-4"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
