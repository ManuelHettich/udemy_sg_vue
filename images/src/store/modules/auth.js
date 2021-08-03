const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  login: () => {},
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};
