import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

export const register = (newUser) => {
  console.log(newUser);
  API.post("/users/register", newUser);
};
