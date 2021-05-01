<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        ></modal-task-name>

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate"></modal-due-date>

        <modal-due-time
          :dueTime.sync="taskToSubmit.dueTime"
          v-if="taskToSubmit.dueDate"
        ></modal-due-time>
      </q-card-section>

      <modal-buttons></modal-buttons>
    </q-form>
  </q-card>
</template>
<script>
import ModalHeader from "components/Tasks/Modals/Shared/ModalHeader.vue";
import { mapActions } from "vuex";
import mixinAddEditTask from "src/mixins/mixin-add-edit-task";
export default {
  mixins: [mixinAddEditTask],
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),

    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      });
      this.$emit("close");
    },
  },

  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
};
</script>
<style>
</style>