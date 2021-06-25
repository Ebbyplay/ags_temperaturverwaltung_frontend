<template>
  <div class="home">
    <TableCom
      :dataSetName="dataSetName"
      :tableHeader="getTableHeaders"
      :tableData="getTableData"
    />
  </div>
</template>

<script>
import TableCom from "@/components/TableCom.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    TableCom,
  },
  data: function data() {
    return {
      dataSetName: "TestTabelle",
    };
  },
  mounted() {},
  computed: {
    getData() {
      return this.$store.state.data;
    },
    getTableHeaders() {
      return this.$store.state.tableHeaders;
    },
    getTableData() {
      return this.$store.state.tableData;
    },
  },
};
</script>
