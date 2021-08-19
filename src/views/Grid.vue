<template>
  <v-container class="mt-12">
    <v-layout>
      <v-row>
        <v-col md="6">
          <v-card outlined>
            <v-card-title>
              TOKYO HOTEL 5 STARS
            </v-card-title>
            <v-card-subtitle>
              book today free breakfast
            </v-card-subtitle>
            <v-card-text>
              close to the river and shijuku
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="ml-2"
                :loading="isLoading"
                outlined
                color="success"
                @click.prevent="onClick"
                >Book</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn fab small class="ml-2" text color="blue"
                ><v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn fab small class="ml-2" text color="pink"
                ><v-icon>mdi-thumb-down</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card outlined>
            <v-card-title>
              TOKYO HOTEL 5 STARS
            </v-card-title>
            <v-card-subtitle>
              book today free breakfast
            </v-card-subtitle>
            <v-card-text>
              close to the river and shijuku
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="ml-2"
                :loading="isLoading"
                outlined
                color="success"
                @click.prevent="onClick"
                >Book</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn fab small class="ml-2" text color="blue"
                ><v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn fab small class="ml-2" text color="pink"
                ><v-icon>mdi-thumb-down</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-row justify="center">
          <v-col md="6">
            <v-card width="100%" outlined>
              <v-card-title>
                Football
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                velit facilis necessitatibus asperiores expedita ad repellendus,
                aspernatur itaque accusantium, dolor odit blanditiis iure
                assumenda alias nulla neque praesentium reprehenderit sunt.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                voluptates eligendi recusandae laboriosam id vitae porro esse,
                earum sequi dolore enim, atque, illo in repudiandae. Expedita
                illo in deleniti laborum.
              </v-card-text>
              <v-card-actions class="ml-2">
                <v-btn color="success">
                  Play
                </v-btn>
                <v-btn outlined color="warning">
                  Book
                </v-btn>
                <v-btn outlined color="black">
                  more detail
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn small fab text color="primary">
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
                <v-btn small fab text color="pink">
                  <v-icon>mdi-thumb-down</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col md="3">
            <v-card outlined>
              <v-card-title>
                col-3
              </v-card-title>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card outlined>
              <v-card-title>
                col-4
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onClick() {
      this.isLoading = true;
    },
  },
};
</script>
<style></style>
