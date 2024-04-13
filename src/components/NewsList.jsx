// components/NewsList/NewsList.js
import React from "react";
import NewsItem from "../components/NewsItems";

const NewsList = ({ articles }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
                <NewsItem key={index} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
