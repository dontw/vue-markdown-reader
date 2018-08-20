export const state = () => ({
  navStatus: 'home', //String
  siderItems: { data: [], type: null }, //Object
  cardContent: '<h2>HOME</h2>', //String
  tableContent: null, //String
});

export const getters = {
  getSiderItems(state) {
    if (state.siderItems.type === 'tree') {
      return {
        data: JSON.parse(
          JSON.stringify(formatTreeObjectName(state.siderItems.data)),
        ),
        type: 'tree',
      };
    }

    return state.siderItems;
  },
};

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
        commit('setSiderItems', {
          data: res,
          type: 'tree',
        });
      });
    }

    if (navStatusName === 'home') {
      commit('clearSiderItems');
      commit('setCardContent', '<h2>HOME</h2>');
    }
  },

  getContent({ commit, state }, siderItemName) {
    commit('clearCardContent');
    if (state.siderItems.type === 'md') {
      this.$axios
        .$get(`/markdown/${siderItemName}.md`)
        .then((res) => {
          commit('setCardContent', res);
        })
        .catch((err) => console.log(err));
    }

    if (state.siderItems.type === 'tree') {
      commit('setCardContent', siderItemName);
    }
  },
};

function formatTreeObjectName(arr) {
  let result = [];
  arr.forEach((item) => {
    let tempArr = {};
    tempArr.title = item.name;
    tempArr.link = item.link;
    tempArr.expand = true;
    if (item.items) {
      tempArr.children = formatTreeObjectName(item.items);
    }
    console.log('temp', tempArr);

    result.push(tempArr);
  });
  return result;
}
