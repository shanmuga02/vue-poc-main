import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    isToggled: false,
    isModalVisible: false
  }),
  actions: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    }
  },
});