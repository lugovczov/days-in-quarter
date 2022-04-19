<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    thisYear: {
      type: String,
      required: true
    }
  },
});
</script>

<template>
  <header>
    How many days in quarter in {{ thisYear }} year
  </header>
</template>

<style scoped>
header {
  text-align: center;
}
</style>