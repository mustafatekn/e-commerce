import axios from "axios";

export const getProducts = async () => {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
};

export const getProduct = async (id:number) => {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`);
}