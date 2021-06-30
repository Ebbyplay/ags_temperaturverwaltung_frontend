<template>
  <div id="sensors-container">
    <SensorCom
      class="sensor"
      v-for="(sensor, index) in sensors"
      :key="index"
      :sensor="sensor"
    />
  </div>
</template>

<script>
import SensorCom from "@/components/SensorCom.vue";
import axios from "axios";

export default {
  name: "Sensors",
  components: {
    SensorCom,
  },
  data: function data() {
    return {
      dataSetName: "TestTabelle",
      sensor: { id: 8, maxTemperature: 60, rackId: 3, manufacturerId: 1 },
      sensors: [],
    };
  },
  mounted() {
    this.getSensors();
  },
  methods: {
    getSensors() {
      this.$store.dispatch("findAll", "sensor").then(
        (response) => {
          for (var i = 0; i < response.length; i++) {
            var row = response[i];
            this.sensors[i] = {
              id: row.id,
              maxTemperature: row.maxTemperature,
              rackId: row.rackId,
              manufacturerId: row.manufacturerId,
            };
          }
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#sensors-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  padding-right: 20px;
  .sensor {
    margin-bottom: 20px;
  }
}
</style>
