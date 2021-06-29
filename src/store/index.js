import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    authorizedUser: {
      name: "",
      admin: true,
      loggedin: false,
    },
    navigation: "Home",
  },
  getters: {
    getSelectedNavItem: state => state.navigation,
    getAuthorizedUser: state => state.authorizedUser,
  },
  mutations: { //setter sync //called via commit('CHANGE_NAVITEM','newNavItem')
    CHANGE_NAVITEM(state, navItem) {
      state.navigation = navItem;
    },
    LOGIN(state, userName, admin) {
      state.authorizedUser.name = userName;
      state.authorizedUser.admin = admin;
    }
  },
  actions: { //setter async only call mutations (could be used for ajax requests) //called via dispatch('function_name','variable')
    actionLogin: async function (userName) {
      let response = await axios.get("http:localhost/findAll");
      console.log(response)
      this.state.commit('LOGIN', userName);
    }
  },
  modules: {
  }
})