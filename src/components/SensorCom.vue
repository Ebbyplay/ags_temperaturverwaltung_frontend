<template>
  <div class="container">
    <div id="header">
      <span>SensorID {{ sensor.id }}</span>
      <span>aktuelle Temperatur:</span>
      <span id="current-temperature">{{ 25 }}°C</span>
      <div id="icon-container">
        <i id="when-opened" class="mdi mdi-chevron-down"></i>
        <i id="when-closed" class="mdi mdi-chevron-right"></i>
      </div>
    </div>
    <div id="data"></div>
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
    return {};
  },
  methods: {
    getManufacturerName() {},
    getTemperatures() {},
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
//century gothic
.container {
  display: flex;
  width: 100%;
  height: 5vh;
  border: solid 1px $bordercolor;
  border-radius: 8px;
  box-shadow: 0px 7px 10px 0px darken($backgroundcolor, 5%);

  #header {
    display: flex;
    width: 100%;

    span {
      font-size: 2.5vh;
      padding: 10px 0 10px 10px;
      flex: 1 1 auto;
      v &:first-child {
        width: 30%;
        text-align: left;
        padding-left: 10px;
      }

      &:nth-of-type(2) {
        text-align: right;
        width: 60%;
      }

      &:nth-of-type(3) {
        color: green;
      }
    }

    #icon-container {
      height: 5vh;
      padding: 0 10px 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        transition: 0.3s;
        font: normal normal normal 40px/1 "Material Design Icons";
      }
    }
  }

  #data {
  }

  #temperatures {
  }
}
</style>
