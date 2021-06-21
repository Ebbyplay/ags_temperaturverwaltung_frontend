import { createStore } from 'vuex'

export default createStore({
  state: {
    authorizedUser: {
      name: "Ebby",
      admin: true,
    },
    navigation: "Home",
  },
  getters: {
    getSelectedNavItem: state => state.navigation,
    getAuthorizedUser: state => state.authorizedUser,
  },
  mutations: { //setter sync //called via commit('CHANGE_NAVITEM','newNavItem')
    CHANGE_NAVITEM (state, navItem) {
      state.navigation = navItem
    }
  },
  actions: { //setter async only call mutations (could be used for ajax requests) //called via dispatch('function_name','variable')
  },
  modules: {
  }
})
