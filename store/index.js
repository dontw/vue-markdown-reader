export const state = () => ({
  navStatus: 'home', //String
  siderItems: null, //Array
  cardContent: null, //String
});

export const mutations = {
  setNavStatus(state, stateName) {
    state.navStatus = stateName;
  },

  setSiderItems(state, items) {
    state.siderItems = items;
  },

  clearSiderItems(state) {
    state.siderItemName = null;
  },

  setCardContent(state, content) {
    state.cardContent = content;
  },

  clearCardContent(state) {
    state.cardContent = null;
  },
};

export const actions = {
  getSiderItems({ commit }, navStatusName) {
    commit('clearCardContent');
    commit('clearSiderItems');
    commit('setNavStatus', navStatusName);

    if (navStatusName === 'guides') {
      this.$axios
        .$get('/markdown/mdconfig.json')
        .then((items) => {
          commit('setSiderItems', items.names);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (navStatusName === 'apis') {
      commit('setSiderItems', ['test1', 'test2', 'test3']);
    }

    if (navStatusName === 'home') {
      commit('setSiderItems', null);
    }
  },

  getContent({ commit }, siderItemName) {
    commit('clearCardContent');
    if (siderItemName) {
      this.$axios
        .$get(`/markdown/${siderItemName}.md`)
        .then((res) => {
          commit('setCardContent', res);
        })
        .catch((err) => console.log(err));
    }
  },
};
