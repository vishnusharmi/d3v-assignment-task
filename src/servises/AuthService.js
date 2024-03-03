import axios from "axios";

const AuthService = {
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
