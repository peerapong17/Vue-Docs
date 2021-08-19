<template>
  <v-container class="mt-3">
    <v-text-field
      class="shrink"
      hide-details
      single-line
      v-model="searchInput"
      solo
      placeholder="Search..."
      append-icon="mdi-magnify"
      @click:append="onSearch"
    ></v-text-field>
    <v-layout wrap v-if="datas.length">
      <Card
        v-for="data in datas"
        v-bind:key="data.id"
        :src="data.largeImageURL"
        :text="data.tags"
      />
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
          console.log(res.data.hits);
          this.datas = res.data.hits;
        });
      this.searchInput = "";
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 400px;
}
</style>
