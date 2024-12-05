<template>
  <div class="progress-bar" :style="{ backgroundColor: backgroundColor }">
    <div class="progress-bar__fill" :style="{ width: props.progress + '%', backgroundColor: fillColor }"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    default: 0,
    validator: (value: number) => value >= 0 && value <= 100
  },
  backgroundColor: {
    type: String,
    default: '#8c87f250'
  },
  fillColor: {
    type: String,
    default: '#8c87f2'
  }
});
</script>

<style scoped>
.progress-bar {
  width: 190px;
  height: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  transition: width 0.3s ease;
}
</style>