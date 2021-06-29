<template>
  <div class="home">
    <SensorCom :sensor="sensor" />
  </div>
</template>

<script>
import SensorCom from "@/components/SensorCom.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    SensorCom,
  },
  data: function data() {
    return {
      dataSetName: "TestTabelle",
      sensor: { id: 8, maxTemperature: 60, rackId: 3, manufacturerId: 1 },
    };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
