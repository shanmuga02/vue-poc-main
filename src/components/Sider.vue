<template>
  <div :class="['sider', { 'sider-active': computedIsToggled }]">
    <div class="sider-1">
      <img src="https://www.databp.com/wp-content/uploads/2022/12/cropped-BP-2-32x32-1.png" alt="logo" class="sider-logo"/>
      <MenuRender :icons="icons" />
      <span @click="toggle" class="notification" style="font-size: 18px; color: #6e86a4; text-align: center; margin-bottom: 1rem; cursor: pointer;">
        <font-awesome-icon :icon="['fas', 'layer-group']" />
      </span>
    </div>
    <div :class="{ 'sider-2': true, 'sider-2-active': computedIsToggled }">
      <span style="display:block; border-bottom: 1px dashed #c0ccd8; margin-bottom: 1em;">
        <h3><font-awesome-icon :icon="['fa', 'bell']" />&nbsp;Notifications</h3>
        <p v-for="(notification, index) in notifications" :key="index" class="notificationText">{{ notification }}</p>
      </span>
      <span style="display:block; border-bottom: 1px dashed #c0ccd8; margin-bottom: 1em; padding-bottom: 1em;">
        <h3><font-awesome-icon :icon="['fa', 'calendar-day']" />&nbsp;Today Progress</h3>
        <p style="color: #19457599; margin-top: 0.51em;">Over All Activity</p>
        <LinearProgressBar :progress="20" backgroundColor="#ffecb3" fillColor="#ffab00" />
      </span>
      <span>
        <h3><font-awesome-icon :icon="['fa', 'people-arrows']" />&nbsp;Connect Us</h3>
        <br/>
        <span style="color: #19457599;">
          <font-awesome-icon :icon="['fa', 'map']" /> No: 123, 2nd Floor, 4th Cross, 5th Main, 6th Sector, HSR Layout, Bangalore - 560102
        </span><br/>
        <span style="color: #19457599;">
          <font-awesome-icon :icon="['fas', 'square-phone']" /> 044-12345678
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/index';
import { ref, onMounted, computed } from 'vue';
import { fetchNotifications } from '../api/notification'
import MenuRender from '../composables/menuRender.vue';
import LinearProgressBar from '../composables/linearProgressBar.vue';

// Removed duplicate toggle function
const store = useMainStore();

const computedIsToggled = computed(() => store.isToggled);
const toggle = () => {  
  store.toggle();
};

const icons = ['house', 'magnifying-glass', 'circle-chevron-right', 'circle-chevron-left'];
const notifications = ref<string[]>([]);

const fetchNotificationsData = async () => {
  try {
    const data = await fetchNotifications();
    notifications.value = data as string[];
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
};

onMounted(() => {
  fetchNotificationsData();
});
</script>