import axios from "axios";
import API_HOST from "../api/index";

const requester = axios.create({
  baseURL: API_HOST,
});

export default requester;
