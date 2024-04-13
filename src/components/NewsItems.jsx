// components/NewsItem/NewsItem.js
import React from "react";

const NewsItem = ({ article }) => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <img
                className="h-50 w-80"
                src={article.urlToImage}
                alt={article.title}
            />
            {article.videoUrl && (
                <video width="320" height="240" controls>
                    <source src={article.videoUrl} type="video/mp4" />
                </video>
            )}
            <p className="text-gray-700">{article.description}</p>
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
            >
                Read more
            </a>
        </div>
    );
};

export default NewsItem;
