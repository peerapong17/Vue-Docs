<template>
  <v-container>
    <h1 class="mt-10 pink--text">Form</h1>

    <v-layout>
      <v-flex column md6>
        <v-form
          ref="form"
          @submit.prevent="onSubmit"
          lazy-validation
          v-model="valid"
        >
          <v-text-field
            prepend-inner-icon="mdi-account"
            outlined="true"
            color="green"
            :rules="[(v) => !!v || 'Name is required']"
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-email"
            outlined="true"
            background-color="gray"
            color="green"
            :rules="[
              (v) => !!v || 'Email is required',
              (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]"
            v-model="email"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            outlined
            color="green"
            prepend-inner-icon="mdi-lock"
            class="some-style"
            :rules="[
              (v) => !!v || 'Item is required',
              ,
              (v) =>
                (v && v.length >= 6) ||
                'Password must be at least 6 characters',
            ]"
            v-model="password"
            label="Password"
            required
            ><prepend-icon>mdi-mail</prepend-icon></v-text-field
          >
          <v-btn type="submit" class="pink white--text">
            Submit
          </v-btn>
          <v-btn
            @click.prevent="resetForm"
            type="submit"
            class="orange white--text ml-3"
          >
            Reset
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    valid: true,
  }),
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log(this.name, this.email, this.password);
      }
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
/* .some-style >>> .v-input__slot::before {
  border-style: none !important;
  background: #000;
} */
</style>
