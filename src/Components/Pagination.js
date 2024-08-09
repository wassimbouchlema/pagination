import React, { useMemo } from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalItems,
  rowsPerPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const maxPageButtons = 5;

  const getPageNumbers = useMemo(() => {
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages, maxPageButtons]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Previous
      </button>
      {getPageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          disabled={number === currentPage}
          className={`pagination-button ${
            number === currentPage ? "active" : ""
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
