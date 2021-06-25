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
    navigation: "",
    data: "",
  },
  mutations: { //setter sync //called via commit('CHANGE_NAVITEM','newNavItem')
    CHANGE_NAVITEM(state, navItem) {
      state.navigation = navItem
      state.tableHeaders = tableHeaderMap.get(navItem)
    },
    CHANGE_TABLEDATA(state, tableData) {
      state.tableData = tableData
    },
  },
  actions: { //setter async only call mutations (could be used for ajax requests) //called via dispatch('function_name','variable')
    async getRequest(context) {
        axios
        .get("http://localhost:8080/" + this.state.navigation)
        .then(response => 
          context.commit("CHANGE_TABLEDATA", response.data)
          )
      
    },
    async change_nav_item(context, navItem) {
      context.commit("CHANGE_NAVITEM", navItem)
      this.dispatch('getRequest')
    }

  },
  modules: {
  },
})