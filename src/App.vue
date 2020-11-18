<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    TopNav,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
* {
  /* background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important; */
  overflow-x: hidden;
}
</style>
