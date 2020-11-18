<template>
  <div class="ma-6">
    <div class="d-flex flex-row flex-wrap">
      <v-card flat class="body-1" max-width="450">
        <h1 class="display-1 mb-5 text-decoration-underline">
          How to get to us
        </h1>
        Choose our hotel as the ideal place from which you can quickly and
        easily arrive at:
        <ul>
          <li>National park Paklenica</li>
          <li>Plitvice</li>
          <li>Kornati</li>
          <li>Šibenik</li>
          <li>Trogir</li>
          <li>Zadar</li>
          <li>Split</li>
        </ul>
        <v-card flat class="my-3">
          Visit the destinations along the coast and discover the magic of the
          Dalmatian hinterland. No one is so close to the events, and so far
          from the noise! From the Hotel express road to the highway in only a
          few minutes!
        </v-card>
      </v-card>
      <v-card flat class="my-6">
        <h1 class="display-1 mt-n3 mb-3 text-decoration-underline">
          Directions
        </h1>
        <v-img
          max-height="250"
          max-width="450"
          src="@/assets/direction-map.jpg"
        ></v-img>
      </v-card>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 30 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
