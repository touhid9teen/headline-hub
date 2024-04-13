// components/BookmarkButton/BookmarkButton.js
import React from "react";

const BookmarkButton = ({ onClick, isBookmarked }) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-full p-2 focus:outline-none ${
                isBookmarked ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                        isBookmarked
                            ? "M6 4l14 8-14 8V4z"
                            : "M17 5.414L12.414 10 17 14.586V19h-6v-6.414l4.586-4.586L11 5.414V5H5v14h14V5z"
                    }
                />
            </svg>
        </button>
    );
};

export default BookmarkButton;
