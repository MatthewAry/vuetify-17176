<!-- number.vue
  Created by Matthew Ary on 2024-06-03.
-->

<script setup lang="ts">
defineProps<{
  number?: number,
  letter?: string
}>()
</script>

<template>
  <VCardTitle>src/pages/number.vue {{ number }}</VCardTitle>
</template>

<style scoped lang="scss"></style>
