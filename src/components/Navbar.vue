<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Docs</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-1" color="red" dark @click="logout">
        Logout
        <v-icon dark right>
          mdi-exit-run
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <NavItem :icon="'mdi-home'" :link="'/'" :page="'Home'" />
      <NavItem :icon="'mdi-radiobox-marked'" :link="'/button'" :page="'Button'" />
      <NavItem :icon="'mdi-grid'" :link="'/grid'" :page="'Grid'" />
      <NavItem :icon="'mdi-file-document-edit'" :link="'/form'" :page="'Form'" />
      <NavItem :icon="'mdi-wifi'" :link="'/api'" :page="'Api'" />
      <NavItem :icon="'mdi-book-plus'" :link="'/todo'" :page="'Todo'" />
      <NavItem :icon="'mdi-exclamation'" :link="'/alert'" :page="'Alert'" />
    </v-navigation-drawer>
    <Dialog :open="open" />
  </nav>
</template>

<script>
import Dialog from "./Dialog.vue";
import NavItem from "./NavItem.vue";
export default {
  components: { Dialog, NavItem },
  data: () => ({
    drawer: false,
    open: false,
  }),
  methods: {
    logout() {
      this.open = true;
    },
  },
};
</script>
