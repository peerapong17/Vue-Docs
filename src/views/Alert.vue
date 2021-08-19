<template>
  <v-container class="mt-12">
    <v-alert dense border="left" type="info">
      I'm a dense alert with a <strong>type</strong> of info
    </v-alert>
    <v-alert dark border="left" text type="success">
      I'm a dense alert with the <strong>text</strong> prop and a
      <strong>type</strong> of success
    </v-alert>
    <v-alert border="left" outlined type="error">
      I'm a dense alert with the <strong>outlined</strong> prop and a
      <strong>type</strong> of error
    </v-alert>
    <v-alert prominent color="pink" dismissible type="error">
      I'm a dense alert with the <strong>outlined</strong> prop and a
      <strong>type</strong> of error
    </v-alert>
    <v-alert prominent outlined type="warning">
      <v-row>
        <v-col class="grow"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          quaerat, nulla possimus rem aliquam perspiciatis dolorem facere cumque
          optio voluptatum, unde maxime veritatis neque distinctio totam
          laboriosam, laudantium nisi praesentium!</v-col
        >
        <v-col class="shrink"
          ><v-btn large outlined color="pink"
            ><v-icon>mdi-dots-horizontal</v-icon></v-btn
          ></v-col
        >
      </v-row>
    </v-alert>
    <v-alert dark shaped text type="warning">
      I'm a dense alert with the <strong>text</strong> prop and a
      <strong>type</strong> of success
    </v-alert>
    <v-alert
      dark
      icon="mdi-home"
      text
      type="primary"
      transition="slide-y-transition"
      class="mb-12"
    >
      I'm a dense alert with the <strong>text</strong> prop and a
      <strong>type</strong> of success
    </v-alert>
    <v-alert
      :value="open"
      class="mb-12"
      transition="slide-y-reverse-transition"
      dark
      border="left"
      text
      type="success"
    >
      I'm a dense alert with the <strong>text</strong> prop and a
      <strong>type</strong> of success
    </v-alert>
    <v-btn @click.prevent="onClick" class="mt-1" color="success"
      >show alert</v-btn
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    onClick() {
      this.open = !this.open;
    },
  },
};
</script>

<style></style>
