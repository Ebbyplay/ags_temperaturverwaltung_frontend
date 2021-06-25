import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    authorizedUser: {
      name: "Ebby",
      admin: true,
    },
    navigation: "Home",
    data: "",
  },
  getters: {
    getSelectedNavItem: state => state.navigation,
    getAuthorizedUser: state => state.authorizedUser,
  },
  mutations: { //setter sync //called via commit('CHANGE_NAVITEM','newNavItem')
    CHANGE_NAVITEM(state, navItem) {
      state.navigation = navItem
    },
    DOWNLOAD_DATA(state, data) {
      state.data = data
    }
  },
  actions: { //setter async only call mutations (could be used for ajax requests) //called via dispatch('function_name','variable')
    async getData(context) {
      const { data } = await axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json");
      context.commit("DOWNLOAD_DATA", data)
    }
  },
  modules: {
  }
})