// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { IoIosArrowUp } from "react-icons/io";

const App = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/home" element={<Home />} exact />
                <Route path="/favorites" element={<Favorites />} exact />
                <Route path="/settings" element={<Settings />} exact />
            </Routes>
            <Button onClick={scrollTop}>
                <IoIosArrowUp />
            </Button>
        </Router>
    );
};

export default App;
