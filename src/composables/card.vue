<template>
  <div class="card-wrapper">
    <div v-for="(data, index) in props.tableData" :key="index" class="card">
      <div class="card-logo">{{ getInitial(data.name) }}</div>
      <h3 class="subTitle" style="width: 150px;">
        {{ data.name }}
        <small>Test@databp.com</small>
      </h3>
      <div style="width: 300px;">
      <span v-for="(tenat, index) in data.tenats" :key="index" class="pills">{{ tenat }}</span>
    </div>
      <p class="subTitle" style="width: 100px;">{{ data.requestApplied}}<small>Applied</small></p>
      <p class="subTitle" style="width: 100px;">{{ data.requestApproved  }}<small>Approved</small></p>
      <p class="subTitle" style="width: 100px;">{{getPending(data.requestApplied,data.requestApproved)}}<small>Pending</small></p>
      </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface TableData {
  name: string;
  requestApproved: number;
  requestApplied: number;
  tenats: string[];
}

const props = defineProps<{
  tableData: TableData[];
}>();

const getInitial = (name: string) => {
  return name.charAt(0).toUpperCase();
};
const getPending = (applied: number, approved: number) => {
  return applied - approved;
};
</script>
