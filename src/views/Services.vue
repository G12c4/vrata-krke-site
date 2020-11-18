<template>
  <div class="ma-1">
    <h1 class="display-1 mb-n1 ml-4 mt-5 text-decoration-underline">Services</h1>

    <Service />
  </div>
</template>

<script>
import Service from "@/components/Service.vue";

export default {
  name: "Services",
  components: {
    Service
  }
};
</script>
