<template>
    <div class="circular-progress">
      <svg class="progress-ring" :width="size" :height="size">
        <circle
          class="progress-ring__circle"
          :stroke="color"
          :stroke-width="strokeWidth"
          :fill="fill"
          :r="radius"
          :cx="center"
          :cy="center"
          :style="{ strokeDasharray: circumference, strokeDashoffset: offset }"
        />
      </svg>
      <div class="progress-text">{{ progress }}%</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    progress: {
      type: Number,
      required: true,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 100
    },
    size: {
      type: Number,
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 5
    },
    color: {
      type: String,
      default: '#8c87f2'
    },
    fill: {
      type: String,
      default: '#8c87f250'
    }
  });
  
  const radius = computed(() => (props.size - props.strokeWidth) / 2);
  const circumference = computed(() => 2 * Math.PI * radius.value);
  const offset = computed(() => circumference.value - (props.progress / 100) * circumference.value);
  const center = computed(() => props.size / 2);
  </script>
  
  <style scoped>
  .circular-progress {
    position: relative;
    display: inline-block;
    width: min-content;
  }
  
  .progress-ring {
    transform: rotate(-90deg);
  }
  
  .progress-ring__circle {
    transition: stroke-dashoffset 0.55s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  
  .progress-text {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
  </style>