<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "Navigation",
  data: function data() {
    return {
      navigationItems: navList,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  border: solid 1px $bordercolor;
  border-radius: 8px;
  box-shadow: 0px 7px 10px 0px darken($backgroundcolor, 5%);
  font-size: 22px;
}
</style>
