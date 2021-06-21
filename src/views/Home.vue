<template>
  <div class="home">
    <NavigationCom />
    <TableCom :dataSetName="dataSetName" :tableHeader="tableHeader" :tableData="tableData"/>
  </div>
</template>

<script>
import TableCom from '@/components/TableCom.vue'
import NavigationCom from '@/components/NavigationCom.vue'


export default {
  name: 'Home',
  components: {
    TableCom,
    NavigationCom,
  },
  data: function data() {
		return {
			dataSetName: "TestTabelle",
      tableHeader: ["Header1", "Header2","Header3"],
      tableData: [
        ["11","12","13"],
        ["21","22","23"],
        ["31","32","33"],
      ],
	}
  },
}
</script>
