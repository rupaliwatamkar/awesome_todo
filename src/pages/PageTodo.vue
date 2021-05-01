<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <template v-if="tasksDownloaded">
        <div class="row q-mb-lg">
          <search />
          <sort />
        </div>

        <p
          v-if="
            search &&
            !Object.keys(tasksTodo).length &&
            !Object.keys(tasksCompleted).length
          "
        >
          No Search Results.
        </p>
        <no-tasks v-if="!Object.keys(tasksTodo).length && !search"></no-tasks>
        <q-scroll-area class="q-scroll-area-tasks">
          <tasks-todo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          ></tasks-todo>

          <tasks-completed
            class="q-mb-xl"
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
          />
        </q-scroll-area>
        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showAddTask = true"
            round
            color="primary"
            class="all-pointer-events"
            size="24px"
            icon="add"
          >
          </q-btn>
        </div>
      </template>
      <template v-else>
        <span class="absolute-center">
          <q-spinner color="primary" size="3em"> </q-spinner>
        </span>
      </template>
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import TasksTodo from "src/components/Tasks/TasksTodo.vue";
import { mapGetters, mapState } from "vuex";
import NoTasks from "src/components/Tasks/NoTasks.vue";
import Search from "src/components/Tasks/Tools/Search.vue";
import Sort from "src/components/Tasks/Tools/Sort";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("tasks", ["settings", "settings"]),
    ...mapState("tasks", ["search", "tasksDownloaded"]),
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  },
  components: {
    "add-task": require("components/Tasks/Modals/AddTask.vue").default,
    "tasks-todo": require("components/Tasks/TasksTodo").default,
    "tasks-completed": require("components/Tasks/TasksCompleted").default,

    NoTasks,
    Search,
    Sort,
  },
};
</script>

<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
