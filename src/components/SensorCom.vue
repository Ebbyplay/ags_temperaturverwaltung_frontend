<template>
  <div class="container">
    <div id="header">
      <span>sensorID {{ sensor.id }}</span>
      <span>aktuelle temperatur:</span>
      <span id="current-temperature" :style="calcTemperatureColor"
        >{{ getCurrentTemp }}°C</span
      >
      <div id="icon-container">
        <i
          id="when-opened"
          class="mdi mdi-chevron-down"
          v-if="expandedDetails"
          v-on:click="expandedDetails = !expandedDetails"
        ></i>
        <i
          id="when-closed"
          class="mdi mdi-chevron-right"
          v-if="!expandedDetails"
          v-on:click="
            expandedDetails = !expandedDetails;
            expandedTemperatures = false;
          "
        >
        </i>
      </div>
    </div>
    <div id="data" v-if="expandedDetails">
      <div id="left-content" class="flex-column">
        <table>
          <tr>
            <td>hersteller:</td>
            <td>{{ manufacturerName }}</td>
          </tr>
          <tr>
            <td>in rack:</td>
            <td>{{ sensor.rackId }}</td>
          </tr>
          <tr>
            <td>
              Alle Temperaturen
            </td>
            <td>
              <div id="icon-container">
                <i
                  id="when-opened"
                  class="mdi mdi-chevron-down"
                  v-if="expandedTemperatures"
                  v-on:click="expandedTemperatures = !expandedTemperatures"
                ></i>
                <i
                  id="when-closed"
                  class="mdi mdi-chevron-right"
                  v-if="!expandedTemperatures"
                  v-on:click="expandedTemperatures = !expandedTemperatures"
                ></i>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="right-content" class="flex-column">
        <table>
          <tr>
            <td>höchste temperatur:</td>
            <td class="right">{{ calcHighestTemp }}°C</td>
          </tr>
          <tr>
            <td>durchschn. temp.:</td>
            <td class="right">{{ calcAvgTemp }}°C</td>
          </tr>
          <tr>
            <td>temperatur limit:</td>
            <td class="right" style="color: red">
              {{ sensor.maxTemperature }}°C
            </td>
          </tr>
        </table>
      </div>
      <span id="spacer" />
    </div>
    <div id="temperature-data" v-if="expandedTemperatures">
      <hr />
      <div v-for="(temp, index) in temperatures" :key="index">
        {{ temp.temperature_value }}
        {{ createDate(temp.timestamp) }}
      </div>
    </div>
  </div>
</template>

<script>
import { createDate } from "../utils.js";

export default {
  name: "SensorCom",
  props: {
    sensor: Object,
  },
  data: function data() {
    return {
      expandedDetails: false,
      expandedTemperatures: false,
      manufacturerName: "",
      temperatures: [],
      temperature_values: [],
      currentTemp: 0,
    };
  },
  mounted() {
    if (this.sensor != null) {
      this.getManufacturerName(this.sensor.manufacturerId);
      this.getTemperatures(this.sensor.id);
    }
  },
  methods: {
    getManufacturerName(manufacturerId) {
      let payload = {
        endpoint: "manufacturer",
        id: manufacturerId,
      };
      this.$store.dispatch("findByID", payload).then(
        (response) => {
          this.manufacturerName = response.name;
        },
        (error) => {
          console.error(error);
        }
      );
    },

    getTemperatures(sensorId) {
      this.$store.dispatch("findTempsBySensorId", sensorId).then(
        (response) => {
          for (var i = 0; i < response.length; i++) {
            this.temperatures[i] = response[i];
            this.temperature_values[i] = response[i].temperature_value;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    },
    createDate(dateArray) {
      return createDate(dateArray);
    },
  },
  computed: {
    calcTemperatureColor() {
      var returnVal = "";
      let currentTemp = this.getCurrentTemp;
      if (this.sensor.maxTemperature - currentTemp >= 10) {
        returnVal = "green";
      } else if (this.sensor.maxTemperature - currentTemp <= 0) {
        returnVal = "red";
      } else {
        returnVal = "yellow";
      }

      return { color: returnVal };
    },

    calcHighestTemp() {
      var highestTemp = 0;
      for (var i = 0; i < this.temperature_values.length; i++) {
        if (this.temperature_values[i] > highestTemp) {
          highestTemp = this.temperature_values[i];
        }
      }
      return highestTemp;
    },
    calcAvgTemp() {
      var sum = 0;
      var count = 0;
      for (var i = 0; i < this.temperature_values.length; i++) {
        sum = sum + this.temperature_values[i];
        count++;
      }
      return Number.parseFloat(sum / count).toPrecision(3);
    },
    getCurrentTemp() {
      var returnVal = 0;
      if (this.temperature_values.length != 0) {
        returnVal = this.temperature_values[0];
      }
      return returnVal;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
//century gothic
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 1px $bordercolor;
  border-radius: 8px;
  box-shadow: 0px 7px 10px 0px darken($backgroundcolor, 5%);
  font-size: 22px;
  #header {
    display: flex;
    width: 100%;
    height: 50px;

    span {
      padding: 10px 0 10px 10px;

      v &:first-child {
        text-align: left;
        padding-left: 10px;
        flex: 4 1 auto;
      }

      &:nth-of-type(2) {
        text-align: right;
        flex: 3 1 auto;
      }

      &:nth-of-type(3) {
        flex: 0 1 auto;
      }
    }

    #icon-container {
      height: 5vh;
      padding: 0 10px 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font: normal normal normal 40px/1 "Material Design Icons";
      }
    }
  }

  #data {
    padding: 1%;
    display: flex;
    width: 96%;

    table {
      .left {
        text-align: right;
      }

      .right {
        text-align: right;
      }

      td {
        padding-top: 20px;
      }
    }

    #left-content {
      flex: 4 1 auto;
    }

    #right-content {
      flex: 3 1 auto;
    }

    #spacer {
      flex: 1 1 6%;
    }
  }

  #temperature-data {
    hr {
      border: 1px solid $buttoncolor;
      margin: 20px;
    }
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
}
</style>
