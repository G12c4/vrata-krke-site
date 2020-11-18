<template>
  <div class="">
    <v-card flat class="mx-auto my-auto" max-width="650">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card class="my-4 px-n5">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn dark color="teal darken-3" elevation="2"
                  >Learn more</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Weddings",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOfAyBV6LgWgRyk2j_nbuM3kK-ngvtP69kRg&usqp=CAU",
        flex: 12,
      },
      {
        title: "Campsite",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyFBaS8Uplw6aXeWK5B4g5yeKbkCFHJ-eQDw&usqp=CAU",
        flex: 6,
      },
      {
        title: "Restaurant",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTdLEQTDiqgXjhaPxyrIvzLVlDfVc5ao9Ulg&usqp=CAU",
        flex: 6,
      },
      {
        title: "Cycling paths",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeFpJZf8AstSgRac4zZsSulQ4-GblyzGE-WQ&usqp=CAU",
        flex: 6,
      },
      {
        title: "Sports court",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7eIE_1pkV0YzlJsYyvnSkfdqKIoWIr0zkog&usqp=CAU",
        flex: 6,
      },
    ],
  }),
};
</script>
