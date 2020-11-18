<template>
  <div>
    <v-app-bar dark color="teal darken-3">
      <v-toolbar-title>Vrata Krke</v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn
          color="teal darken-1 white--text"
          dark
          @click.stop="drawer = !drawer"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </span>

      <v-toolbar-items dark class="hidden-xs-only">
        <v-btn to="/" text>
          Home
        </v-btn>
        <v-btn to="accommodation" text>
          Accommodation
        </v-btn>
        <v-btn to="services" text>
          Services
        </v-btn>
        <v-btn to="about" text>
          About
        </v-btn>
        <v-btn to="contact" text>
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      color="teal darken-3"
      v-model="drawer"
      absolute
      temporary
      right
      dark
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/" },
        { title: "Accommodation", link: "accommodation" },
        { title: "Services", link: "services" },
        { title: "About-us", link: "about" },
        { title: "Contact", link: "contact" },
      ],
    };
  },
};
</script>
