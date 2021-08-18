<template>
  <v-container class="mt-3">
    <v-toolbar dense width="400">
      <v-text-field
        hide-details
        single-line
        v-model="searchInput"
      ></v-text-field>
      <v-btn icon @click="onSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout wrap v-if="datas.length">
      <Card v-for="data in datas" v-bind:key="data.id" :src="data.largeImageURL" :text="data.tags"/>
    </v-layout>
    <!-- <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular> -->
  </v-container>
</template>

<script>
import Card from "../components/Card.vue";
import axios from "axios";
export default {
  components: { Card },
  data: () => ({
    searchInput: "",
    datas: [],
  }),
  methods: {
    onSearch() {
      axios
        .get(
          `https://pixabay.com/api/?key=21804730-03999f68bb15cc0c960ed0189&q=${this.searchInput}`
        )
        .then((res) => {
          console.log(res.data.hits)
          this.datas = res.data.hits;
        });
      this.searchInput = "";
    },
  },
};
</script>

<style></style>
