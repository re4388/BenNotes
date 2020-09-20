import Vue from "vue";
import axios from "axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(axios);
  },
  get(userId) {
    const githubToken = process.env.VUE_APP_GITHUB_TOKEN;

    return axios({
      method: "get",
      url: `${API_URL}${userId}/repos?page=1&per_page=100`,
      headers: {
        Authorization: "token " + githubToken
      }
      // auth: {
      //   username: process.env.VUE_APP_GITHUB_USER_NAME,
      //   password: process.env.VUE_APP_GITHUB_TOKEN
      // }
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
