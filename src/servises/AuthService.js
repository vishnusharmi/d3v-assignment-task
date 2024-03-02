import axios from "axios";

// const API_URL = "https://dummyjson.com";

const AuthService = {
  //   async login(credentials) {
  //     try {
  //       const response = await fetch("https://dummyjson.com/auth/login", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(credentials),
  //       });
  //       console.log("res:", response);
  //       if (response.ok) {
  //         const data = await response.json();
  //         localStorage.setItem("token", data.token);
  //         return data;
  //       } else {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error);
  //       }
  //     } catch (error) {
  //       throw new Error("Error during login: " + error.message);
  //     }
  //   },

  //   async register(user) {
  //     try {
  //       const response = await axios.post(`${API_URL}/users/add`, user);
  //       return response.data;
  //     } catch (error) {
  //       throw error.response.data.error;
  //     }
  //   },

  async login(credentials) {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        credentials
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        return response.data;
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      throw new Error("Error during login: " + error.message);
    }
  },

  async register(user) {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        user
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      throw new Error("Error during registration: " + error.message);
    }
  },

  logout() {
    localStorage.removeItem("token");
  },

  isAuthenticated() {
    return localStorage.getItem("token") !== null;
  },
};

export default AuthService;
