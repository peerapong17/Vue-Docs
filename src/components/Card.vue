<template>
  <v-flex xs12 sm6 md4 class="px-4 mt-6">
    <v-card>
      <v-img
        :src="src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="250px"
      >
        <v-card-title v-text="text"></v-card-title>
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    props: {
        text: String,
        src: String
    }
};
</script>

<style></style>
