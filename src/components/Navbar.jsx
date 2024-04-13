// components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex flex-row items-center justify-center">
                    <Link
                        to="/home"
                        className="text-white mr-4 hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        to="/favorites"
                        className="text-white mr-4 hover:underline"
                    >
                        Favorites
                    </Link>
                    <Link to="/settings" className="text-white hover:underline">
                        Settings
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
