<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No Task to do today
    <template v-slot:action>
      <q-btn
        @click="$root.$emit('showAddTask')"
        color="primary"
        label="Add Tasks"
      />
    </template>
  </q-banner>
</template>