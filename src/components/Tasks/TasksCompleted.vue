<template>
  <div class="q-mt-lg">
    <list-heder bgColor="bg-blue-grey-4">completed</list-heder>
    <q-list separator bordered>
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>
<script>
import ListHeder from "../Shared/ListHeder.vue";
export default {
  props: ["tasksCompleted"],
  components: {
    task: require("components/Tasks/Task.vue").default,
    ListHeder,
  },
};
</script>
<style>
</style>