<template>
  <div>
    <h1>{{ dataSetName }}</h1>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in tableHeader" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataRow, index) in tableData" :key="index">
          <td v-for="(data, index) in dataRow" :key="index">{{ data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default  {
    name: 'TableCom',
    props: {
      dataSetName: { type: String, default: '' },
      tableHeader: { type: String, default: '' },
      tableData: { type: String, default: '' },
    },
}
</script>

<style lang="scss" scoped>
</style>
