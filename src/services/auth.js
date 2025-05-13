import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  try {
    localStorage.removeItem("accessToken");
    const response = await axios.post(`${API_URL}/login`, userData);

    console.log("Login response data:", response.data);

    const { token } = response.data;

    if (token) {
      localStorage.setItem("accessToken", token);
    }

    return response.data;
  } catch (error) {
    console.log("Login error:", error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("accessToken");
};
