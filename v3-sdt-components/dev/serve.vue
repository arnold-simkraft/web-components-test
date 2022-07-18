<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { V3SdtComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  V3SdtComponentsSample,
  // }
});
</script>

<template>
  <div id="app">
    <SdtButton></SdtButton>
  </div>
</template>
