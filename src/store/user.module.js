// import Vue from "vue";
import { UserService } from "@/common/api.service";
import { GET_USER } from "./actions.type";
import { SET_USER } from "./mutations.type";

const initialState = {
  fetchRepo: {},
  validUsername: false
};

export const state = { ...initialState };

export const actions = {
  async [GET_USER](context, userName) {
    try {
      const res = await UserService.get(userName);
      context.commit(SET_USER, res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
};

export const mutations = {
  [SET_USER](state, res) {
    state.fetchRepo = res.data;
    state.validUsername = true;
  }
};

const getters = {
  fetchRepo(state) {
    return state.fetchRepo;
  },
  validUsername(state) {
    return state.validUsername;
  },
  numberOfRepo(state) {
    return state.fetchRepo.length;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
