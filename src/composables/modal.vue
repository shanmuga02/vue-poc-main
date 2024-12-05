<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-content">
        <button class="close-btn transparent" @click="closeModal">X</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('update:isVisible', false);
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  