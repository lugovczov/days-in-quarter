<template>
  <p class="result" v-if="days && quarter">
    Days in <b>{{ quarter }}</b>: <i>{{ days }}</i> days
  </p>
  <p class="result" v-else>
    <i>Please select a quarter</i>
  </p>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Result",
  props: {
    days: {
      type: Number,
      required: true,
    },
    quarter: {
      type: String,
      required: true
    }
  },
  setup(props) {
    props.days;
    props.quarter;
  }
})
</script>

<style scoped>
.result {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  white-space: pre-wrap;
}
</style>