"use client";
import React, { useState } from "react";
import Item from "./item";
import data from "./items";

function ItemList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const itemsPerPage = 1;

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get current item to display
  const currentItem = data[currentPage - 1];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Display the current item */}
      <div className="flex-grow">
        {currentItem && <Item item={currentItem} />}
      </div>

      {/* Pagination controls */}
      <div className="sticky bottom-0 py-3 flex items-center justify-center space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Numbered buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-gray-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ItemList;
