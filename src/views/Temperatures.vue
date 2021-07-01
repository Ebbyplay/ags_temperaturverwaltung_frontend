<template>
  <h1>Temperaturen</h1>
  <div id="data-buttons">
    <button class="simple-button" v-on:click="getTemperatures()">
      Alle Temperaturen
    </button>
    <button class="simple-button" v-on:click="getLastTenTemperatures()">
      letzten 10
    </button>
    <button class="simple-button" v-on:click="reverseList()">
      <i class="mdi mdi-sort-ascending" v-if="sort == 'asc'" />
      <i class="mdi mdi-sort-descending" v-if="sort == 'desc'" />
    </button>
  </div>
  <div id="temperatures-container">
    <TableCom :tableHeader="tableHeader" :tableData="temperatures" />
  </div>
</template>

<script>
import TableCom from "@/components/TableCom.vue";
import axios from "axios";
import { createDate } from "../utils.js";

export default {
  name: "Temperatures",
  components: {
    TableCom,
  },
  data: function data() {
    return {
      temperatures: [],
      tableHeader: ["ID", "SensorID", "Temperatur", "Zeitstempel"],
      sort: "desc",
    };
  },
  mounted() {
    this.getTemperatures();
  },
  methods: {
    getTemperatures() {
      this.temperatures = [];
      this.$store.dispatch("findAll", "temperature").then(
        (response) => {
          response = response.reverse();
          for (let i = 0; i < response.length; i++) {
            let data = response[i];
            this.temperatures[i] = {
              id: data.id,
              sensorId: data.sensorId,
              value: Number.parseFloat(data.temperature_value).toPrecision(3),
              timestamp: createDate(data.timestamp),
            };
          }
          if (this.sort == "asc") {
            this.temperatures.reverse();
          }
        },
        (error) => {
          console.error(error);
        }
      );
    },
    getLastTenTemperatures() {
      this.temperatures = [];
      this.$store.dispatch("findLastTen").then(
        (response) => {
          for (let i = 0; i < response.length; i++) {
            let data = response[i];
            this.temperatures[i] = {
              id: data.id,
              sensorId: data.sensorId,
              value: Number.parseFloat(data.temperature_value).toPrecision(3),
              timestamp: createDate(data.timestamp),
            };
          }
          if (this.sort == "asc") {
            this.temperatures.reverse();
          }
        },
        (error) => {
          console.error(error);
        }
      );
    },
    reverseList() {
      this.temperatures.reverse();
      if (this.sort == "asc") {
        this.sort = "desc";
      } else {
        this.sort = "asc";
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

#data-buttons {
  display: flex;
  flex-direction: row;

  .simple-button {
    font-size: 25px;
    margin: 10px;
  }
}

#temperatures-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}
</style>
