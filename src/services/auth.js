import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  const { token } = response.data;

  if (token) {
    localStorage.setItem("authToken", token);
  }

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("authToken");
};