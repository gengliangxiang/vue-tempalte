<template>
  <div>
    <div>home</div>
    <div @click="toHome()">去登录</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("home");
  },
  methods: {
    toHome() {
      console.log(2222);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>