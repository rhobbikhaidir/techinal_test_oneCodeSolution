import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const service = {
  getUserList: async () => {
    try {
      const response = api.get("/users");
      return response;
    } catch (error) {
      return error;
    }
  },
};


export default service;
