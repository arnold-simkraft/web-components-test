<script setup lang="ts">
import { ref } from "vue";
import { SdtButton } from "v3-sdt-components";
const currentDateTime = ref(new Date());

// const
setInterval(() => {
  currentDateTime.value = new Date();
});
</script>

<template>
  <div class="bg-color">Div 1: {{ currentDateTime }}</div>
  <div>
    <div>Start Button</div>
    <SdtButton text="Click Me" />
    <div>End Button</div>
  </div>
  <div class="bg-color">Div 2: {{ currentDateTime }}</div>
</template>

<style scoped>
@import "./app.css";

.bg-color {
  background-color: blue;
}
</style>
