<template>
  <div class="content">
    <h1>Licensing Hub</h1>
    <p>The operating system for Market Data licensing. Seamlessly manage data relationships through a single, integrated platform</p>
    <div>
      <Statistics />
    </div>
    <div class="detailCard">
      <span class="header">
        <h2>License List</h2>
        <button @click="openModal"><font-awesome-icon :icon="['fas', 'plus']" />New Request</button>
      </span>
      <Card :tableData="tableData" />
    </div>
  </div>
  <Modal :isVisible="isModalVisible" @update:isVisible="updateModalVisibility">
    <h2>Request License</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="requestApplied">Request Applied:</label>
        <input type="number" id="requestApplied" v-model="formData.requestApplied" required />
      </div>
      <div>
        <label for="requestApproved">Request Approved:</label>
        <input type="number" id="requestApproved" v-model="formData.requestApproved" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMainStore } from '../stores/index';
import { fetchLicenses, createLicense } from '../api/licenses';

import Card from '../composables/card.vue';
import Statistics from './statistics.vue';
import Modal from '../composables/modal.vue';

const store = useMainStore();

const isModalVisible = computed(() => store.isModalVisible);
const openModal = () => {
  store.openModal();
};
const updateModalVisibility = (value: boolean) => {
  store.isModalVisible = value;
};

const tableData = ref<any[]>([]);

const fetchTableData = async () => {
  try {
    const data = await fetchLicenses();
    tableData.value = data;
  } catch (error) {
    console.error('Error fetching table data:', error);
  }
};

onMounted(() => {
  fetchTableData();
});

const formData = ref({
  name: '',
  requestApplied: 0,
  requestApproved: 0
});

const handleSubmit = async () => {
  try {
    const newEntry = {
      name: formData.value.name,
      tenats: [], // Add tenants if needed
      requestApplied: formData.value.requestApplied,
      requestApproved: formData.value.requestApproved,
      pending: formData.value.requestApplied - formData.value.requestApproved
    };
    await createLicense(newEntry);
    tableData.value.push(newEntry);
    store.closeModal();
    formData.value.name = '';
    formData.value.requestApplied = 0;
    formData.value.requestApproved = 0;
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>