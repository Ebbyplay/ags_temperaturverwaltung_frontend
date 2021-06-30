<template>
  <div id="navigation" class="flex">
    <div
      class="nav-item"
      v-for="(navItem, index) in navigationItems"
      :key="index"
      :id="navItem.id"
    >
      <a :href="navItem.path">
        <button @click="changeNav">
          {{ navItem.name }}
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import { navList } from "../assets/data/navList";

export default {
  name: "Navigation",
  data: function data() {
    return {
      navigationItems: navList,
    };
  },
  methods: {
    changeNav(e) {
      this.$store.dispatch("change_nav_item", e.target.id);
    },
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
