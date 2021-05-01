<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      clearable
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[(val) => !!val || 'Field is required']"
      ref="name"
      autofocus
      v-select-all
      class="col"
      label="Task name"
    />
  </div>
</template>
<script>
import { selectAll } from "src/directives/directives-select-all";
export default {
  props: ["name"],
  directives: {
    selectAll,
  },
};
</script>
<style>
</style>