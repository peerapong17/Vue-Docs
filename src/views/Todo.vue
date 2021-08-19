<template>
  <v-container fluid fill-height>
    <v-layout class="mt-10 justify-center">
      <v-flex xs9 sm7 md4>
        <v-form ref="form">
          <v-text-field
            :rules="[(v) => !!v || 'Todo is required']"
            outlined
            prepend-inner-icon="mdi-book-plus"
            label="Todo"
            v-model="task"
            class="mb-4"
            autocomplete="off"
          ></v-text-field>
          <v-btn
            large
            color="green"
            class="white--text mr-4"
            @click.prevent="addTodo"
            >Add</v-btn
          >
          <v-btn large color="pink" class="white--text" @click.prevent="clear"
            >Clear</v-btn
          >
        </v-form>
        <div class="mt-12">
          <v-card
            elevation="2"
            :ripple="true"
            hover
            class="mt-4"
            :class="{
              success: todo.isCompleted,
              'white--text': todo.isCompleted,
            }"
            v-for="(todo, index) in todos"
            v-bind:key="index"
            @click="onToggle(index)"
          >
            <v-card-actions>
              <v-text-field
                class="headline font-weight-medium"
                @click.stop=""
                v-model="editedTask"
                v-if="todo.isEditting"
              ></v-text-field>

              <v-card-title class="headline font-weight-medium" v-else>{{
                todo.task
              }}</v-card-title>
              <v-spacer></v-spacer>
              <v-btn
                @click.stop="onUpdate(index)"
                color="#34eb34"
                small
                height="40"
                v-if="todo.isEditting"
              >
                <v-icon color="white">
                  mdi-check
                </v-icon>
              </v-btn>
              <v-btn
                @click.stop="onEdit(index)"
                color="blue"
                small
                height="40"
                v-else
              >
                <v-icon color="white">
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn
                @click.stop="onDelete(index)"
                color="pink"
                small
                height="40"
              >
                <v-icon color="white">
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isEditting: false,
      isCompleted: false,
      task: "",
      editedTask: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.$refs.form.validate()) {
        const todo = {
          task: this.task,
          isCompleted: this.isCompleted,
          isEditting: this.isEditting,
        };
        this.todos.push(todo);
        this.$refs.form.reset();
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    onToggle(index) {
      const toggledIndex = this.todos.map((_, i) => i).indexOf(index);
      this.todos[toggledIndex].isCompleted = !this.todos[toggledIndex]
        .isCompleted;
    },
    onEdit(index) {
      const id = this.todos.findIndex((_, i) => i === index);
      this.todos[id].isEditting = !this.todos[id].isEditting;
      this.editedTask = this.todos[id].task;
    },
    onUpdate(index) {
      this.isEditting = !this.isEditting;
      const id = this.todos.map((_, i) => i).indexOf(index);
      this.todos[id].isEditting = !this.todos[id].isEditting;
      this.todos[id].task = this.editedTask;
    },
    onDelete(index) {
      const id = this.todos.findIndex((todo, i) => i === index);
      this.todos.splice(id, 1);
    },
  },
};
</script>

<style></style>
