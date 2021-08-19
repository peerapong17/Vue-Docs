<template>
  <v-container>
    <h2 class="mt-8 pink--text text--lighten-2">Button Section</h2>
    <v-layout row class="mt-7" wrap>
      <v-btn text color="pink" class="ml-2">button</v-btn>
      <v-btn outlined color="pink" class="ml-2">button</v-btn>
      <v-btn color="pink" dark class="ml-2">button</v-btn>
      <v-btn color="primary" text rounded dark class="ml-2">button</v-btn>
      <v-btn color="primary" outlined rounded dark class="ml-2">button</v-btn>
      <v-btn color="primary" rounded dark class="ml-2">button</v-btn>
      <v-btn color="red" text rounded class="ml-2">button<v-icon right>mdi-magnify</v-icon></v-btn>
      <v-btn color="red" outlined rounded class="ml-2">button<v-icon right>mdi-magnify</v-icon></v-btn>
      <v-btn color="red" rounded dark class="ml-2">button<v-icon right>mdi-magnify</v-icon></v-btn>
      <v-btn text x-small color="warning" class="ml-2"
        >button <v-icon right>mdi-home</v-icon></v-btn
      >
      <v-btn text small color="warning" class="ml-2"
        >button <v-icon right>mdi-home</v-icon></v-btn
      >
      <v-btn outlined color="warning" class="ml-2"
        >button <v-icon right>mdi-home</v-icon></v-btn
      >
      <v-btn large color="warning" class="ml-2"
        >button <v-icon right>mdi-home</v-icon></v-btn
      >
      <v-btn x-large elevation="2" color="warning" class="ml-2 subtitle-1"
        >button <v-icon right>mdi-home</v-icon></v-btn
      >
      <v-btn fab text color="primary" class="ml-2"
        ><v-icon>mdi-home</v-icon></v-btn
      >
      <v-btn fab outlined color="primary" class="ml-2"
        ><v-icon>mdi-home</v-icon></v-btn
      >
      <v-btn fab color="primary" class="ml-2"
        ><v-icon>mdi-home</v-icon></v-btn>
      <v-btn color="success" loading class="ml-2"
        >button <v-icon right>mdi-cart</v-icon></v-btn
      >
      
      <v-btn tile color="success" loading class="ml-2"
        >button <v-icon right>mdi-cart</v-icon></v-btn
      >
      <v-btn rounded color="success" loading class="ml-2"
        >button <v-icon right>mdi-cart</v-icon></v-btn
      >
      <v-btn fab color="success" loading class="ml-2"
        >button <v-icon right>mdi-cart</v-icon></v-btn
      >
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
