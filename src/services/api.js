import axios from "axios";

export const urlBaseMembers = axios.create({
  baseURL: "http://localhost:3001/",
});

