import React, { useEffect, useState } from "react";
import { prodCategory } from "../../services/api";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);
  const [catData, setCatData] = useState([]);
  console.log(catData);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false); // Close the menu after selecting a category (optional)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategory === null) return;
        const result = await prodCategory(selectedCategory);
        console.table("Category Data ", result);
        setCatData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold">
            FakeStore
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/products" className="text-white">
            Products
          </Link>

          {/* Dropdown for Categories */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              Categories
            </button>
            {isMenuOpen && (
              <div className="absolute transition-all duration-[300ms] rounded-lg top-12 right-0 bg-gray-800 text-white py-2 px-8">
                <Link
                  to="/"
                  onClick={() => handleCategoryChange(null)}
                  className={`block ${
                    selectedCategory === null && "font-bold"
                  }`}
                >
                  All Categories
                </Link>
                <Link
                  to="/"
                  onClick={() => handleCategoryChange("electronics")}
                  className={`block ${
                    selectedCategory === "electronics" && "font-bold"
                  }`}
                >
                  Electronics
                </Link>
                <Link
                  to="/"
                  onClick={() => handleCategoryChange("jewelery")}
                  className={`block ${
                    selectedCategory === "jewelery" && "font-bold"
                  }`}
                >
                  Jewelry
                </Link>
                <Link
                  to="/"
                  onClick={() => handleCategoryChange("men's clothing")}
                  className={`block ${
                    selectedCategory === "men's clothing" && "font-bold"
                  }`}
                >
                  Men's Clothing
                </Link>
                <Link
                  to="/"
                  onClick={() => handleCategoryChange("women's clothing")}
                  className={`block ${
                    selectedCategory === "women's clothing" && "font-bold"
                  }`}
                >
                  Women's Clothing
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800">
            <Link to="/" className="block py-2 px-4 text-white">
              Home
            </Link>
            <Link to="/products" className="block py-2 px-4 text-white">
              Products
            </Link>
            <Link to="/about" className="block py-2 px-4 text-white">
              About Us
            </Link>
            <Link to="/contact" className="block py-2 px-4 text-white">
              Contact
            </Link>
            {/* Dropdown for Categories */}
            <div className="py-2 px-4">
              <Link
                to="/"
                onClick={() => handleCategoryChange(null)}
                className={`block ${selectedCategory === null && "font-bold"}`}
              >
                All Categories
              </Link>
              <Link
                to="/"
                onClick={() => handleCategoryChange("electronics")}
                className={`block ${
                  selectedCategory === "electronics" && "font-bold"
                }`}
              >
                Electronics
              </Link>
              <Link
                to="/"
                onClick={() => handleCategoryChange("jewelery")}
                className={`block ${
                  selectedCategory === "jewelery" && "font-bold"
                }`}
              >
                Jewelry
              </Link>
              <Link
                to="/"
                onClick={() => handleCategoryChange("men's clothing")}
                className={`block ${
                  selectedCategory === "men's clothing" && "font-bold"
                }`}
              >
                Men's Clothing
              </Link>
              <Link
                to="/"
                onClick={() => handleCategoryChange("women's clothing")}
                className={`block ${
                  selectedCategory === "women's clothing" && "font-bold"
                }`}
              >
                Women's Clothing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
