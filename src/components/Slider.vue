<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import image1 from "@/assets/VK-balkon.jpg";
import image2 from "@/assets/VK-soba.jpg";
import image3 from "@/assets/VK-soba2.jpg";
import image4 from "@/assets/VK-wc.jpg";
import image5 from "@/assets/VK-recep.jpg";
import image6 from "@/assets/VK-hotel.jpg";

export default {
  name: "Slider",
  data() {
    return {
      items: [image1, image2, image3, image4, image5, image6],
    };
  },
};
</script>
