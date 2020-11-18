<template>
  <div class="d-flex flex-row flex-wrap">
    <v-card class="mx-auto my-auto" max-width="374">
      <v-img height="250" src="@/assets/VK-soba2.jpg"></v-img>

      <v-card-title>Superior Double Room</v-card-title>

      <v-card-text>
        <div>
          Double bed for two and a large balcony with a beautiful view.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn dark color="teal darken-3">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" src="@/assets/VK-soba.jpg"></v-img>

      <v-card-title>Superior Twin Room</v-card-title>

      <v-card-text>
        <div>
          2 single beds separated and a large balcony with a beautiful view.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn dark color="teal darken-3">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" src="@/assets/VK-balkon.jpg"></v-img>

      <v-card-title>Superior Suite</v-card-title>

      <v-card-text>
        <div>
          Double bed for two with a spacious living room and a large balcony.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn dark color="teal darken-3">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Rooms",
  data: () => ({
    loading: false,
    selection: 1
  })
};
</script>

<style scoped></style>
