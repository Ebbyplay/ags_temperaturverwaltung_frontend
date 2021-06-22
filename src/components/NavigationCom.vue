<template>
  <div id="navigation" class="flex">
    <button
      class="nav-item"
      v-for="(navItem, index) in navigationItems"
      :key="index"
    >
      {{ navItem }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    navigationItems: { String, default: ["Home", "Sensoren", "User"] },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
$hovercolor: darken($buttoncolor, 10%);
$activecolor: darken($buttoncolor, 20%);

#navigation {
  width: inherit;
  height: inherit;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;

  .nav-item {
    width: 80%;
    font-size: 2vw;
    border: solid $bordercolor 1px;
    cursor: pointer;
    background-color: $buttoncolor;
    transition: 0.2s;
    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom: none;
    }
    &:last-child {
      border-top: none;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &:hover {
      background-color: darken($buttoncolor, 10%);
    }
    &:active {
      background-color: darken($bordercolor, 20%);
    }
  }
}
</style>
