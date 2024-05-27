import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 1000,
  headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
});

export default instance;
