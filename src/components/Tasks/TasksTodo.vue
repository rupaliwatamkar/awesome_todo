<template>
  <div>
    <list-heder bgColor="bg-red-4">Todo</list-heder>
    <q-list separator bordered>
      <task
        v-for="(task, key) in tasksTodo"
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
  props: ["tasksTodo"],
  components: {
    task: require("components/Tasks/Task.vue").default,
    ListHeder,
  },
};
</script>
<style>
</style>