<template>
  <div class="ma-6">
    <h1 class="display-1 pb-4 text-decoration-underline">Our Rooms</h1>

    <Rooms />
  </div>
</template>

<script>
import Rooms from "@/components/Rooms.vue";

export default {
  name: "Accommodation",
  components: {
    Rooms
  }
};
</script>
