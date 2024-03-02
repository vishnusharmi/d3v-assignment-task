import React, { useEffect, useState } from "react";

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

  const renderObject = (obj) => {
    return Object.entries(obj).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong>{" "}
        {typeof value === "object" ? renderObject(value) : value}
      </div>
    ));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>{renderObject(values)}</div>
    </div>
  );
}
