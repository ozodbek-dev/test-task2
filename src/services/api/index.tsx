import axios from "axios";
import config from "config";
import { storage } from "services";

const api = axios.create({
  baseURL: config.API_ROOT,
  timeout: 30000, // 30 seconds
});

api.defaults.headers.common["Accept"] = "application/json";

api.interceptors.request.use(
  (configs) => {
    configs.headers.Authorization = `Bearer ${storage.get("token")}`;
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
