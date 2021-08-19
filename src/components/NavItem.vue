<template>
  <v-list>
    <v-list-item
      class="black--text"
      active-class="pink--text"
      routerLink
      :to="link"
    >
      <v-list-item-action>
        <v-icon>
          {{ icon }}
        </v-icon>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{ page }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    link: String,
    icon: String,
    page: String,
  },
};
</script>

<style></style>
