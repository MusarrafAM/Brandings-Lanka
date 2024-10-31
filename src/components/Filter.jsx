import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Slider from "@mui/material/Slider";

const Filter = ({ onFilter, onSearch, onCategorySelect, categoryCounts }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [activeCategory, setActiveCategory] = useState(null); // State for active category

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applySearch = () => {
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
    <div className="px-6">
      {/* Searchbar */}
      <div className="flex items-center pt-2">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-black px-2 py-1"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button onClick={applySearch} className="bg-red-500 p-2">
          <IoSearch size={20} />
        </button>
      </div>

      {/* Product Categories */}
      <div className="mt-4">
        <h4 className="text-xl text-gray-600 my-6 uppercase font-semibold">
          Product categories
        </h4>

        {/* Dynamically map each category */}
        {categories.map((category) => (
          <div
            key={category}
            className="flex items-center justify-between border-b border-gray-300 py-3 group cursor-pointer"
            onClick={() => handleCategorySelect(category)}
          >
            <p
              className={`${
                activeCategory === category ? "text-black font-semibold" : "text-gray-600"
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
          className="bg-blue-400 px-6 py-1 rounded-full mx-auto block"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
