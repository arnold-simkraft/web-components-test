<template>
  <button class="btn">{{ textToDisplay }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text?: string;
}>();

const textToDisplay = computed(() => {
  return props.text ?? "Default Button Text";
});
</script>

<!-- <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: { type: String },
  },
});
</script> -->

<style scoped>
.btn {
  background-color: red;
  border-width: 3px;
  border-color: orange;
  border-radius: 0;
  border-style: solid;
  color: white;
  display: block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
}

.btn:active:hover,
.btn:focus,
.btn:hover {
  background-color: #1b1b32;
  border-width: 3px;
  border-color: #000;
  background-image: none;
  color: #f5f6f7;
}
</style>
