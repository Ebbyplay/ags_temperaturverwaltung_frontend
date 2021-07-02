import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    authorizedUser: {
      name: null,
      admin: false,
      loggedin: false,
      nickname: null
    },
    navigation: "",
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
    async change_nav_item(context, navItem) {
      context.commit("CHANGE_NAVITEM", navItem)
    },

    findAll(context, endpoint) {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/" + endpoint + "/findAll").then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    findByID(context, payload) {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/" + payload.endpoint + "/" + payload.id).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    findByNickname(context, nickname) {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/user/findByNickname?nickname=" + nickname).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    create(context, endpoint, newEntity) {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:8080/" + endpoint + "/create", newEntity).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    update(context, endpoint, updateEntity) {
      return new Promise((resolve, reject) => {
        axios.put("http://localhost:8080/" + endpoint + "/update", updateEntity).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    delete(context, endpoint, id) {
      return new Promise((resolve, reject) => {
        axios.delete("http://localhost:8080/" + endpoint + "/delete/" + id).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    updateMaxTemp(context, updateEntity) {
      return new Promise((resolve, reject) => {
        axios.put("http://localhost:8080/sensor/update/max_temp", updateEntity).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },

    findLastTen(context) {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/temperature/findLast10").then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    },
    findTempsBySensorId(context, sensorId) {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/temperature/findBySensorId/" + sensorId).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        })
      })
    }

  },
  modules: {
  },
})