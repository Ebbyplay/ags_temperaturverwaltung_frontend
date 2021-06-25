<template>
  <div class="home">
    <TableCom
      :dataSetName="dataSetName"
      :tableHeader="getTableHeaders"
      :tableData="tableData"
    />
    {{ getData }}
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
      tableHeader: this.$store.tableHeaders,
      tableData: [
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
      ],
      info: "Test",
    };
  },
  mounted() {
    this.$store.dispatch("getRequest", );
  },
  computed: {
    getData() {
      return this.$store.state.data;
    },
    getTableHeaders() {
      return this.$store.state.tableHeaders;
    }
  }
};
</script>
