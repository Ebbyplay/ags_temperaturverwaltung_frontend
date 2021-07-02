<template>
  <div class="container">
    <div
      id="header"
      v-on:click="
        expandedDetails = !expandedDetails;
        expandedTemperatures = false;
        editing = false;
      "
    >
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
        ></i>
        <i
          id="when-closed"
          class="mdi mdi-chevron-right"
          v-if="!expandedDetails"
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
              <div
                id="expand-temp"
                v-on:click="expandedTemperatures = !expandedTemperatures"
                v-if="temperatures.length > 0"
              >
                <span>Alle Temperaturen</span>
                <div id="icon-container">
                  <i
                    id="when-opened"
                    class="mdi mdi-chevron-down"
                    v-if="expandedTemperatures"
                  />
                  <i
                    id="when-closed"
                    class="mdi mdi-chevron-right"
                    v-if="!expandedTemperatures"
                  />
                </div>
              </div>
            </td>
            <td></td>
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
              <input
                v-model="maxTempInput"
                v-bind:class="[
                  editing ? 'maxTempInputActive' : 'maxTempInputPassive',
                ]"
              />°C
            </td>
          </tr>
        </table>
      </div>
      <div id="action-bar">
        <span id="spacer" />
        <i
          class="edit mdi mdi-pencil"
          v-if="isAdmin && !editing"
          v-on:click="editing = true"
        />
        <div id="edit-actions">
          <i
            class="save mdi mdi-content-save"
            v-if="isAdmin && editing"
            v-on:click="
              editing = false;
              updateMaxTemp(maxTempInput.value);
            "
          />
          <i
            class="cancel mdi mdi-close-thick"
            v-if="isAdmin && editing"
            v-on:click="
              editing = false;
              maxTempInput = sensor.maxTemperature;
            "
          />
        </div>
      </div>
    </div>
    <div id="temperature-data" v-if="expandedTemperatures">
      <hr />
      <TableCom
        id="TableCom"
        dataSetName="Temperaturen"
        :tableHeader="tableHeader"
        :tableData="transformTempertureData(temperatures)"
      />
    </div>
  </div>
</template>

<script>
import { createDate } from "../utils.js";
import TableCom from "../components/TableCom";

export default {
  name: "SensorCom",
  components: {
    TableCom,
  },
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
      tableHeader: ["ID", "Temperatur", "Zeitstempel"],
      editing: false,
      isAdmin: this.$store.state.authorizedUser.admin,
      maxTempInput: this.sensor.maxTemperature,
    };
  },
  mounted() {
    //this.isAdmin =  this.$store.state.authorizedUser.admin;
    this.isAdmin = true;

    this.$nextTick(function() {
      window.setInterval(() => {
        if (this.sensor != null && !this.editing) {
          this.getManufacturerName(this.sensor.manufacturerId);
          this.getTemperatures(this.sensor.id);
        }
      }, 3000);
    });
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
          response = response.reverse();
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
    transformTempertureData(data) {
      let transformedData = new Array();
      for (var i = 0; i < this.temperatures.length; i++) {
        let object = {
          id: this.temperatures[i].id,
          temperature_value: Number.parseFloat(
            this.temperatures[i].temperature_value
          ).toPrecision(3),
          timestamp: createDate(this.temperatures[i].timestamp),
        };
        transformedData[i] = object;
      }
      return transformedData;
    },
    updateMaxTemp() {
      let updateEntity = {
        sensorId: this.sensor.id,
        newMaxTemperature: this.maxTempInput,
        userId: 6, //TODO get user id
      };
      this.$store.dispatch("updateMaxTemp", updateEntity);
    },
  },
  computed: {
    calcTemperatureColor() {
      var returnVal = "";
      let currentTemp = this.getCurrentTemp;
      if (this.sensor.maxTemperature - currentTemp > 10) {
        returnVal = "green";
      } else if (this.sensor.maxTemperature - currentTemp <= 5) {
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
      return Number.parseFloat(highestTemp).toPrecision(3);
    },
    calcAvgTemp() {
      var sum = 0;
      var count = 0;
      for (var i = 0; i < this.temperature_values.length; i++) {
        sum = sum + this.temperature_values[i];
        count++;
      }
      var returnVal;
      if (count == 0) {
        returnVal = 0;
      } else {
        returnVal = Number.parseFloat(sum / count).toPrecision(3);
      }
      return returnVal;
    },
    getCurrentTemp() {
      var returnVal = 0;
      if (this.temperature_values.length != 0) {
        returnVal = Number.parseFloat(this.temperature_values[0]).toPrecision(
          3
        );
      }
      return returnVal;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: solid 1px $bordercolor;
  border-radius: 8px;
  box-shadow: 0px 7px 10px 0px darken($backgroundcolor, 5%);
  font-size: 22px;

  #header {
    display: flex;
    width: 100%;
    height: 50px;
    cursor: pointer;

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
    height: 100%;

    table {
      .left {
        text-align: right;
      }

      .right {
        text-align: right;

        .maxTempInputActive {
          display: inline;
          font-size: inherit;
          border: 1px solid $bordercolor;
          padding: none;
          background-color: inherit;
          color: inherit;
          width: 25px;
        }

        .maxTempInputPassive {
          border: none;
          display: inline;
          font-size: inherit;
          padding: none;
          background-color: inherit;
          color: inherit;
          width: 25px;
          pointer-events: none;

          &:focus {
            outline: none;
          }
        }
      }

      td {
        padding-top: 20px;
      }
    }

    #left-content {
      flex: 4 1 auto;
      height: 100%;

      #expand-temp {
        display: flex;
        width: 220px;
        border: 2px solid $buttoncolor;
        border-radius: 5px;
        padding: 5px;
        user-select: none;
        cursor: pointer;
      }
    }

    #right-content {
      flex: 3 1 auto;
    }
  }

  #action-bar {
    display: flex;
    height: 100%;
    flex: 1 1 6%;
    flex-direction: column;

    #spacer {
      flex: 1 1 auto;
      height: 125px;
      width: 100%;
    }

    #edit-action {
      display: flex;
      flex-direction: row;
    }

    .edit,
    .save,
    .cancel {
      width: 100%;
      height: 33%;
      cursor: pointer;
      padding: 0 5px 0 5px;
      &:hover {
        color: $bordercolor;
      }
      &:active {
        color: darken($bordercolor, 10%);
      }
    }
  }

  #temperature-data {
    hr {
      border: 1px solid $buttoncolor;
      margin: 20px;
    }

    #TableCom {
      overflow-y: scroll;
      max-height: 300px;
    }
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
}
</style>
