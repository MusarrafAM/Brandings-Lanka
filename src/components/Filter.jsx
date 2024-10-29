import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Slider from "@mui/material/Slider";

const Filter = ({ onFilter, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applySearch = () => {
    onSearch(searchText);
  };

  const applyFilter = () => {
    onFilter(priceRange);
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
        <h4 className=" text-xl text-gray-600 my-6 uppercase font-semibold">
          Product categories
        </h4>

        {/* Each Categories  need to dynamically map later*/}
        <div className="flex items-center justify-between border-b border-gray-300 py-3 group cursor-pointer">
          <p className="text-gray-600 group-hover:text-black duration-200">
            Exclusive Premium Collections
          </p>
          <p className="text-xs text-gray-400">(22)</p>
        </div>

        <div className="flex items-center justify-between border-b border-gray-300 py-3 group cursor-pointer">
          <p className="text-gray-600 group-hover:text-black duration-200">
            Mens collection
          </p>
          <p className="text-xs text-gray-400">(102)</p>
        </div>

        <div className="flex items-center justify-between border-b border-gray-300 py-3 group cursor-pointer">
          <p className="text-gray-600 group-hover:text-black duration-200">
            Junior collection
          </p>
          <p className="text-xs text-gray-400">(56)</p>
        </div>

        <div className="flex items-center justify-between border-b border-gray-300 py-3 group cursor-pointer">
          <p className="text-gray-600 group-hover:text-black duration-200">
            Women’s collection.
          </p>
          <p className="text-xs text-gray-400">(74)</p>
        </div>
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
          {/* here block make the button take sthe full width so our mx-auto works as exected */}
          Filter
        </button>
      </div>
    </div>
  );
};
export default Filter;
