<template>
  <div class="ma-6">
    <h1 class="display-1 pb-10 text-decoration-underline">
      Contact Information
    </h1>
    <div class="d-flex flex-row text-center justify-space-between flex-wrap">
      <div class="d-flex flex-column ma-auto">
        <v-icon class="pb-5" x-large color="teal darken-3">
          mdi-domain
        </v-icon>
        <h3>ADDRESS</h3>
        <p>Lozovac 2e, 22221 Lozovac Croatia</p>
        <p>Hotel location – Lozovac</p>
        <p>OIB: 89474355302</p>
      </div>
      <div class="d-flex flex-column ma-auto">
        <v-icon class="pb-5" x-large color="teal darken-3">
          mdi-message-text
        </v-icon>
        <h3>PHONE & FAX</h3>
        <p>24/7 Reservation via Phone</p>
        <p>Tel.: +385 (0) 22 778 092</p>
        <p>Mob.: +385 (0) 91 380 88 00</p>
        <p>Fax: +385 (0) 22 778 091</p>
      </div>
      <div class="d-flex flex-column ma-auto">
        <v-icon class="pb-5" x-large color="teal darken-3">
          mdi-email
        </v-icon>
        <h3>E-MAIL</h3>
        <p>24/7 Reservation via Email</p>
        <p>info@vrata-krke.hr</p>
        <p>(Reception Service Desk)</p>
      </div>
    </div>
    <v-card flat max-width="650">
      <h1 class="display-1 my-4 text-decoration-underline">Contact Us</h1>
      <form class="my-2">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="30"
          label="Full Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </v-card>
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
