<template>
  <button class="btn" :class="quarter === activeQuarter && 'active'" @click="handler(quarter)">
    {{ quarter }}
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Button",
  props: {
    quarter: {
      type: String,
      required: true,
    },
    handler: {
      type: Function,
      required: true
    },
    activeQuarter: {
      type: String,
    }
  },
  setup(props) {
    props.quarter;
    props.activeQuarter;
  }
});
</script>

<style scoped>
.btn {
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #858585;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
}

.btn.active {
  background-color: #858585;
  border-color: #858585;
  color: #fff;
}
</style>