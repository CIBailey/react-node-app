import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/1",
  headers: {
    "Content-type": "application/json",
  },
});
