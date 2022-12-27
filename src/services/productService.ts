import axios from "axios";

export const getProducts = async () => {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
};
