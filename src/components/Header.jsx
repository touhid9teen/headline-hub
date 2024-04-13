// components/Header/Header.js
import React, { useState } from "react";
import NewsList from "../components/NewsList";
import { searchNews } from "../utils/api";

const Header = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        const data = await searchNews(query);
        setSearchResults(data);
    };
    return (
        <header className="flex justify-between bg-blue-300 px-4 py-4 text-black items-center">
            <h1 className="text-2xl font-bold text-black">
                Real-Time News App
            </h1>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search news..."
                    className="border border-gray-300 rounded-md py-2 px-4"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
                >
                    Search
                </button>
                {searchResults.length > 0 && (
                    <div>
                        <h2 className="text-3xl font-bold mt-8 mb-4">
                            Search Results
                        </h2>
                        <NewsList articles={searchResults} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
