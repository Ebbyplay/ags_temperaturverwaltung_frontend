<template>
  <div class="container">
    <div id="header">
      <span>sensorID {{ sensor.id }}</span>
      <span>aktuelle temperatur:</span>
      <span id="current-temperature" :style="calcTemperatureColor"
        >{{ currentTemp }}°C</span
      >
      <div id="icon-container">
        <i
          id="when-opened"
          class="mdi mdi-chevron-down"
          v-if="expanded"
          v-on:click="expanded = !expanded"
        ></i>
        <i
          id="when-closed"
          class="mdi mdi-chevron-right"
          v-if="!expanded"
          v-on:click="expanded = !expanded"
        ></i>
      </div>
    </div>
    <div id="data" v-if="expanded">
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
        </table>
      </div>

      <div id="right-content" class="flex-column">
        <table>
          <tr>
            <td>höchste temperatur:</td>
            <td class="right">{{ 25 }}°C</td>
          </tr>
          <tr>
            <td>durchschn. temp.:</td>
            <td class="right">{{ 25 }}°C</td>
          </tr>
          <tr>
            <td>temperatur limit:</td>
            <td class="right">{{ sensor.maxTemperature }}°C</td>
          </tr>
        </table>
      </div>
      <span id="spacer"></span>
    </div>
    <div id="temperatures"></div>
  </div>
</template>

<script>
export default {
  name: "SensorCom",
  props: {
    sensor: Object,
  },
  data: function data() {
    return {
      expanded: false,
      currentTemp: 50,
      manufacturerName: "",
      temperatures: [],
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
      console.log(manufacturerId);
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
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
  computed: {
    calcTemperatureColor() {
      var returnVal = "";
      if (this.sensor.maxTemperature - this.currentTemp >= 10) {
        returnVal = "green";
      } else if (this.sensor.maxTemperature - this.currentTemp <= 0) {
        returnVal = "red";
      } else {
        returnVal = "yellow";
      }

      return { color: returnVal };
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

  #temperatures {
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
}
</style>
