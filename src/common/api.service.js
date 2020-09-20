import Vue from "vue";
import axios from "axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(axios);
  },
  get(userId) {
    return axios({
      method: "get",
      url: `${API_URL}${userId}/repos?page=1&per_page=100`,
      auth: {
        // username: process.env.VUE_APP_GITHUB_USER_NAME,
        // password: process.env.VUE_APP_GITHUB_PASSWORD
        username: `re4388`,
        password: `211aoxjgju`
      }
    }).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;

export const UserService = {
  get(userId) {
    return ApiService.get(userId);
  }
};
