import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-2 p-1 rounded-lg"
        placeholder="Search..."
      />
      <BiSearch
        size={18}
        className="text-gray-600 cursor-pointer absolute top-2 right-2"
      />
    </div>
  );
};

export default Search;
