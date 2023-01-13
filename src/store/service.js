import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// https://jsonplaceholder.typicode.com/posts/1/comments?_page=3&_limit=2

const service = {
  getUserList: async () => {
    try {
      const response = api.get("/users");
      return response;
    } catch (error) {
      return error;
    }
  },
  getListPosts: async ( _page, _limit) => {
    try {
      const response = api.get(`/posts`, {
        params: {
          _page,
          _limit,
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  },
  getPostDetail:  async (id) => {
  try {
    const response = api.get(`/posts/${id}`);
    return response;
  } catch (error) {
    return error;
  }
},
  getComent: async (postId) => {
    try {
      const response = api.get(`/posts/${postId}/comments`);
      return response;
    } catch (error) {
      return error;
    }
  },
  getProfile: async (id) => {
    try {
      const response = api.get(`/users/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default service;
