import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsList.css";
import SearchNav from "../SearchNav";
import ProductService from "../../servises/ProductService";

const ProductsLists = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, sortOrder]);

  const fetchProducts = async () => {
    try {
      const { products } = await ProductService.searchProducts(
        searchQuery.toLowerCase()
      );
      const filteredAndSortedProducts = filterAndSortProducts(products);

      setProducts(filteredAndSortedProducts);
      setTotalPage(Math.ceil(filteredAndSortedProducts.length / 6));
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleProductClick = (productId) => {
    navigate(`/ProductDetail/${productId}`);
  };

  const filterAndSortProducts = (products) => {
    let filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    filteredProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return filteredProducts;
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = Math.min(startIndex + 6, products.length);

  const onPageChange = (i) => {
    setCurrentPage(i);
  };

  const DisplayButton = ({ totalPage }) => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          style={{
            margin: "5px",
            backgroundColor: currentPage === i ? "green" : "",
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <div
        className="search-container"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: 999,
          marginTop: "0px",
        }}
      >
        <div className="search-bar-container">
          <SearchNav
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onSearch={handleSearch}
            className="navbar"
          />
        </div>
      </div>
      <div className="productCcontainer" style={{ marginTop: "60px" }}>
        {products.slice(startIndex, endIndex).map((product, i) => (
          <div
            key={product.id}
            className="productCard"
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-width"
            />
            <h3 className="title">
              {startIndex + i + 1} {product.title}
            </h3>
            <p>
              <span>Description :</span>
              {product.description}
            </p>
            <p>
              <span>Price: $</span>
              <span className="pColor">{product.price}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        {products.length > 0 ? (
          totalPage > 0 ? (
            <center>
              <span>Pages</span>
              <div className="pagination-buttons">
                <DisplayButton totalPage={totalPage} />
              </div>
            </center>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default ProductsLists;
