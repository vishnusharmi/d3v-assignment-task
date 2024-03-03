import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SearchNav = ({ setSortOrder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByName, setSortByName] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  const handleSortChange = (sortType) => {
    setSortByPrice(sortType);
    setSortOrder(sortType);
    setSortByName("");
  };

  const handleSortByNameChange = (sortType) => {
    setSortByName(sortType);
    setSortOrder(sortType);
    setSortByPrice("");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleLogout = () => {
    console.log("User logged out");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <img
        src="https://www.d3vtech.com/wp-content/themes/d3v-theme/images/d3v-logo.svg"
        alt="load"
        width="70px"
        height="50px"
      />
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div className="sort-container">
        <span>Sort by price: </span>
        <select
          value={sortByPrice}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="sort-container">
        <span>Sort by name: </span>
        <select
          value={sortByName}
          onChange={(e) => handleSortByNameChange(e.target.value)}
        >
          <option value="">Select</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
      <DropdownButton id="dropdown-basic-button" title="Profile ">
        <Dropdown.Item href="#/action-1">
          <Link to="/Profile">Profile</Link>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout} href="#/action-2">
          Logout
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default SearchNav;
