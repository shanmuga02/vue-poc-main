<template>
  <div class="statistics">
    <span style="width: 30%; border-right: 1px solid #8c87f250;">
      <span class="clre">
      <h3>New Users</h3>
      <CircularProgressBar :progress="circularProgress" />
    </span>
    <span class="clre">
      <h3>Active Users</h3>
      <CircularProgressBar :progress="circularProgress1" color="#66bb6a" fill="#b9f6ca" />
    </span>
    </span>
    <span style="width: 30%; border-right: 1px solid #8c87f250;">
      <h3>Todays Market: &nbsp;</h3>
      <img 
        src="https://banner2.cleanpng.com/20240106/tr/transparent-business-coin-pile-bar-graph-increase-profits-coins-stacked-with-a-rising-profit-bar-1710935591191.webp"
        style="width: 150px; height: 150px; object-fit: contain;"
      />
      </span>
    <span style="width: 40%; flex-direction: column;">
    <span class="clre">
      <h3>Request Raised</h3>
      <LinearProgressBar :progress="linearProgress" />
    </span>
    <span class="clre">
      <h3>Request Approved</h3>
      <LinearProgressBar :progress="linearProgress1" backgroundColor="#dcedc8" fillColor="#8bc34a" />
    </span>
    <span class="clre">
      <h3>Pending Approval</h3>
      <LinearProgressBar :progress="linearProgress2" backgroundColor="#ffe0b2" fillColor="#fb8c00" />
    </span>
  </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CircularProgressBar from '../composables/circularProgressBar.vue';
import LinearProgressBar from '../composables/linearProgressBar.vue';

const circularProgress = ref(0);
const linearProgress = ref(0);
const linearProgress1 = ref(0);
const linearProgress2= ref(0);
const circularProgress1 = ref(0);


onMounted(() => {
  // Simulate progress update
  const interval = setInterval(() => {
    if (circularProgress.value < 40) {
      circularProgress.value += 10;
    } else if (circularProgress1.value < 20) {
      circularProgress1.value += 10;
    } else if (linearProgress.value < 80) {
      linearProgress.value += 10;
    } else if (linearProgress1.value < 40) {
      linearProgress1.value += 10;
    } else if (linearProgress2.value < 50) {
      linearProgress2.value += 10;
    } else {
      clearInterval(interval);
    }
  }, 100);
});
</script>