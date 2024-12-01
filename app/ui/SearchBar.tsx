import React from "react";
import { SearchBarProps } from "@/app/lib/types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => (
    <input
        type="text"
        placeholder="Search..."
        // фиксируем при каждом изменении
        onChange={(e) => onSearch(e.target.value)} 
        className="border p-2 rounded w-full my-4"
    />
);

export default SearchBar;
