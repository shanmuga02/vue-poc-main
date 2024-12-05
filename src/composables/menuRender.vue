<template>
    <ul class="menu">
        <li v-for="(icon, index) in props.icons" :key="index">
            <font-awesome-icon :icon="['fas', icon]" />
        </li>
    </ul>
</template>

<script setup lang="ts">

const props = defineProps({
    icons: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.menu li {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #c0ccd8;
  margin: 1em 0;
  align-self: center;
}
</style>