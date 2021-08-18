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
      <v-list-item routerLink to="/">
        <v-list-item-action>
          <v-icon>
            mdi-home
          </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item routerLink to="/form">
        <v-list-item-action>
          <v-icon>
            mdi-file-document-edit
          </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Form</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item routerLink to="/api">
        <v-list-item-action>
          <v-icon>
            mdi-wifi
          </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Form</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <Dialog :open="open" />
  </nav>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  components: { Dialog },
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
