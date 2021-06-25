import { createStore } from 'vuex'
import axios from 'axios'
import { tableHeaderMap } from '../assets/data/tableHeader'

export default createStore({
  state: {
    authorizedUser: {
      name: "Ebby",
      admin: true,
    },
    tableHeaders : [],
    tableData : [],
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
      state.tableHeaders = tableHeaderMap.get(navItem)
    },
    DOWNLOAD_DATA(state, data) {
      state.data = data
    },
    CHANGE_TABLEDATA(state, tableData) {
      state.tableData = tableData
    }
  },
  actions: { //setter async only call mutations (could be used for ajax requests) //called via dispatch('function_name','variable')
    async getData(context) {
      const { data } = await axios
        .get("http://localhost:8080/users")
      context.commit("DOWNLOAD_DATA", data)
    },
    async getRequest(context, endpoint) {
      const { tableData } = await axios
        .get("http://localhost:8080/" + endpoint)
      context.commit("CHANGE_TABLEDATA", tableData)
    }
  },
  modules: {
  }
})