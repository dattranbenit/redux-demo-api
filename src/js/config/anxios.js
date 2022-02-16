import axios from "axios";
import { SERVER_API_URL } from "./env";

const TIMEOUT = 1 * 60 * 1000;

export const api = axios.create({
  baseURL: SERVER_API_URL,
  timeout: TIMEOUT
})
