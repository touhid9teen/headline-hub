// pages/Favorites/Favorites.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import { getFavorites } from "../utils/api";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Fetch favorite news articles when the component mounts
        const fetchFavorites = async () => {
            const data = await getFavorites();
            setFavorites(data);
        };
        fetchFavorites();
    }, []);

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-4">My Favorites</h2>
                <NewsList articles={favorites} />
            </div>
        </div>
    );
};

export default Favorites;
