import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Initialize dark mode from localStorage on mount
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode !== null) {
            setDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);

    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        // Apply or remove 'dark' class to document root
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-white dark:bg-n-8 text-n-8 dark:text-white transition-colors">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
};

export default App;
