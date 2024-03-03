import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import SearchNav from "./SearchNav";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const [values, setValues] = useState([]);
  const token = localStorage.getItem("token");
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      setValues(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(values);

  return (
    <div>
      <SearchNav />
      <div className="container">
        {values ? (
          <Card className="card" style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {values.firstName} {values.lastName}
              </Card.Text>
              <Card.Text>
                <strong>Username:</strong> {values.username}
              </Card.Text>
              <Card.Text>
                <strong>Gender:</strong> {values.gender}
              </Card.Text>
              <Card.Text>
                <strong>Age:</strong> {values.age}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {values.email}
              </Card.Text>
              <Link to="/ProductList">
                <Button variant="warning">Go Back</Button>
              </Link>
            </Card.Body>
          </Card>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
