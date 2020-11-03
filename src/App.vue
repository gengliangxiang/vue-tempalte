<template>
  <div id="app"><router-view /></div>
</template>

<script>
export default {
  name: "App",

  components: {},
  data: () => ({
    //
  }),
  mounted() {
    console.log(process.env.PROJECT_ENV);
  },
};
</script>

<style>
</style>
