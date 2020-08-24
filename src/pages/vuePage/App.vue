<template>
  <div class="page-content">
    <img alt="Vue logo" src="../../images/vue.png" />
    <HelloWorld msg="Hello Vue"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
@import "./vuePage.scss";
</style>