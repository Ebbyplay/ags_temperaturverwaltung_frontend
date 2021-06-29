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
    
    async change_nav_item(context, navItem) {
      context.commit("CHANGE_NAVITEM", navItem)
      this.dispatch('getRequest')
    },

    myAction(context, data) {

      return new Promise((resolve, reject) => {

          // Do something here... lets say, a http call using vue-resource
         
         axios.get("http://localhost:8080/user/findAll").then(response => {

             resolve(response);  // Let the calling function know that http is done. You may send some data back

         }, error => {

              // http failed, let the calling function know that action did not work out
             
              reject(error);

          })

      })

    }

  },
  modules: {
  },
})