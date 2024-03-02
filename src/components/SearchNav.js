// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./SearchNav.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// const SearchNav = ({ sortOrder, setSortOrder, onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     onSearch(searchQuery);
//   };
//   const handleLogout = () => {
//     console.log("User logged out");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="navbar">
//       <div className="logo">
//         <Link to="/">Home</Link>
//       </div>
//       <div className="sort-container">
//         <span>Sort by price: </span>
//         <select value={sortOrder} onChange={handleSortChange}>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>
//       </div>
//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search products..."
//         />
//         <button type="submit" className="searchButton">
//           Search
//         </button>
//       </form>
//       <DropdownButton id="dropdown-basic-button" title="Profile ">
//         <Dropdown.Item href="#/action-1">
//           <Link to="/Profile">Profile</Link>
//         </Dropdown.Item>
//         <Dropdown.Item onClick={handleLogout} href="#/action-2">
//           Logout
//         </Dropdown.Item>
//       </DropdownButton>
//     </div>
//   );
// };

// export default SearchNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SearchNav = ({ sortOrder, setSortOrder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByName, setSortByName] = useState("asc");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortByNameChange = () => {
    setSortByName(sortByName === "asc" ? "desc" : "asc");
    setSortOrder("name"); // Set sorting order to "name"
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
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div className="sort-container">
        <span>Sort by price: </span>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="sort-container">
        <DropdownButton id="dropdown-basic-button" title="Sort by name">
          <Dropdown.Item onClick={handleSortByNameChange}>
            {sortByName === "asc" ? "A to Z" : "Z to A"}
          </Dropdown.Item>
        </DropdownButton>
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
