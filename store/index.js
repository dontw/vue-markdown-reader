export const state = () => ({
  navStatus: 'home', //String
  siderItems: { data: [], type: null }, //Object
  cardContent: '<h2>HOME</h2>', //String
  tableContent: null, //String
});

export const mutations = {
  setNavStatus(state, stateName) {
    state.navStatus = stateName;
  },

  setSiderItems(state, items) {
    state.siderItems = items;
  },

  clearSiderItems(state) {
    state.siderItemName = { data: [], type: null };
  },

  setCardContent(state, content) {
    state.cardContent = content;
  },

  clearCardContent(state) {
    state.cardContent = null;
  },

  setTableContent(state, content) {
    state.tableContent = content;
  },

  clearTableContent(state) {
    state.tableContent = null;
  },
};

export const actions = {
  getSiderItems({ commit }, navStatusName) {
    commit('clearCardContent');
    commit('clearSiderItems');
    commit('clearTableContent');
    commit('setNavStatus', navStatusName);

    if (navStatusName === 'guides') {
      this.$axios
        .$get('/markdown/mdconfig.json')
        .then((res) => {
          commit('setSiderItems', { data: res.names, type: 'md' });
          commit('setCardContent', '<h2>GUIDES</h2>');
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (navStatusName === 'apis') {
      this.$axios.$get(process.env.API_URL + 'API').then((res) => {
        console.log('result', changeName(res));
        // commit('setSiderItems', { data: newRes, type: 'api' });
      });
    }

    if (navStatusName === 'home') {
      commit('clearSiderItems');
      commit('setCardContent', '<h2>HOME</h2>');
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

function changeName(arr) {
  let tempArr = {};
  let result = [];
  arr.forEach((item) => {
    tempArr.title = item.name;
    if (item.items) {
      tempArr.children = changeName(item.items);
    }
    result.push(tempArr);
  });
  return result;
}
