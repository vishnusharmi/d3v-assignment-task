import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import AuthService from "../../servises/AuthService";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await AuthService.login(formData);
      console.log("Login successful:", data);
      Navigate("/ProductList");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="Register-link">
          Dont have an account? <Link to="/Register">Register</Link>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const Navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       console.log("Response from server:", response);
//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("token", data.token);
//         console.log("Login successful:", data);
//         Navigate("/ProductList");
//       } else {
//         let errorData;
//         try {
//           errorData = await response.json();
//         } catch (error) {
//           errorData = await response.text();
//         }
//         console.error("Login failed:", errorData);
//       }
//     } catch (error) {
//       console.error("Login failed:", error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         <div className="Register-link">
//           Don't have an account? <Link to="/Register">Register</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
