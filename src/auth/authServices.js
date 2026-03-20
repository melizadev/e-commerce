import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
//register service to send data to the backend and handle the response
export const registerService = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
//get profile service to get the user data from the backend
export const getProfileService = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/auth/profile`,
      { withCredentials: true },
    );
    console.log("Profile data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Failed to fetch profile");
  }
};

export const loginService = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const logoutService = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/logout`,
      {},
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
};
