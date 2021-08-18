<template>
    <v-dialog v-model="open" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure?
        </v-card-title>
        <v-card-text>
          This page will be closed and you will be derected to the HomePage
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="open = false">
            Cancel
          </v-btn>
          <v-btn color="pink darken-1" text @click="open = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        open: Boolean
    }
}
</script>