<template>
  <h1>Temperaturen</h1>
  <div id="temperatures-container">
    <TableCom />
  </div>
</template>

<script>
import TableCom from "@/components/TableCom.vue";
import axios from "axios";

export default {
  name: "Temperatures",
  components: {
    TableCom,
  },
  data: function data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
#temperatures-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  padding-right: 20px;
}
</style>
