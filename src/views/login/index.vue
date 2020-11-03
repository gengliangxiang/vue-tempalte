<template>
  <div>
    <div>login</div>
    <div @click="toHome()">去首页</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("login");
  },
  methods: {
    toHome() {
      console.log(1111);
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>