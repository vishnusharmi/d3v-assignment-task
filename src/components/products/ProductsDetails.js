import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductsDetails.css";
import ProductService from "../../servises/ProductService";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import SearchNav from "../SearchNav";

export default function ProductsDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const data = await ProductService.getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  console.log("Single product - ", product);

  return (
    <div>
      <SearchNav />
      <div className="product-detail-container">
        {product ? (
          <div className="detail-card">
            <Card>
              <Card.Body>
                <div className="detail-images">
                  <Card.Img
                    src={product.images[0]}
                    alt={product.title}
                    style={{ width: "200px", height: "150px" }}
                  />
                  {/* ))} */}
                </div>
                <Card.Title style={{ color: "Highlight" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>
                  <span className="descrip">Description:</span>{" "}
                  {product.description}
                </Card.Text>
                <Card.Text>
                  <span className="descrip">Price:</span> ${product.price}
                </Card.Text>
                <Link to="/ProductList">
                  <Button variant="warning">Go Back</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
