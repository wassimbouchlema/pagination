import React, { useState, useEffect, useCallback } from "react";
import Pagination from "./Pagination";
import { fetchTotalDocs, fetchUsers } from "../services/usersService.js";
import "./PaginatedTable.css";

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [totalDocs, setTotalDocs] = useState(0);

  useEffect(() => {
    const loadTotalDocs = async () => {
      const total = await fetchTotalDocs();
      setTotalDocs(total);
    };
    loadTotalDocs();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      const userList = await fetchUsers(currentPage, rowsPerPage);
      setUsers(userList);
    };

    loadUsers();
  }, [rowsPerPage, currentPage]);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">name</th>
            <th className="table-header">last name</th>
            <th className="table-header">phone number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.lastName}</td>
              <td className="table-cell">{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <label htmlFor="rowsPerPage" className="rows-per-page-label">
          Rows per page:
        </label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="rows-per-page-select"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalDocs}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PaginatedTable;
