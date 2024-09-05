import React, { useState, useEffect } from 'react';

const SearchBar = ({ blogs, onFilteredBlogs }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredBlogs = blogs.filter((blog) => {
      const categoryMatch = selectedCategory === 'All' ? true : blog.category === selectedCategory;
      const searchMatch = searchQuery
        ? blog.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.creator.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return categoryMatch && searchMatch;
    });

    useEffect(() => {
      onFilteredBlogs(filteredBlogs); // Pass the filtered blogs to parent component
    }, [filteredBlogs, onFilteredBlogs]);

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setIsOpen(false);
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const categories = ['All', 'Health', 'Technology']; // Add more categories as needed

    return (
      <div className="relative">
        <input
            type="text"
            placeholder="Search by title or creator"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md border-2 border-gradient-to-r from-purple-800 to-pink-700 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent shadow-sm transition duration-150 ease-in-out"
            style={{
                background: 'linear-gradient(90deg, #9b5de5 0%, #f15bb5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
        />
        <div className="absolute right-0 top-0">
          <div className="relative">
            <button
                type="button"
                className="px-4 py-2 bg-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                style={{
                    background: 'linear-gradient(90deg, #9b5de5 0%, #f15bb5 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                onClick={toggleDropdown}
            >
              {selectedCategory}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 inline-block ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="transition duration-300 ease-in-out absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10" style={{ display: isOpen ? 'block' : 'none' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default SearchBar;

