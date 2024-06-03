<!-- TheLetterA.vue
  Created by Matthew Ary on 2024-05-31.
-->

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  letter: string
}>()
const number = ref(1)

const pickerType = ref<'tabs (will break 🐞)' | 'buttons' | 'links'>('buttons')
</script>

<template>
  <VCard>
    <VCardTitle>src/pages/letter.vue {{ letter }}</VCardTitle>
    <VCardText>
      The tabs in here should have the letter implicitly defined. Select <code>tabs (will break)</code> in the select field. Then click "CAN YOU REPRODUCE IT?" to see everything break.
      <VSelect :items="['tabs (will break 🐞)', 'buttons', 'links']" v-model="pickerType" />
    </VCardText>
    <VTabs v-if="pickerType === 'tabs (will break 🐞)'" v-model="number">
      <VTab v-for="num in 10" :key="num" :to="{ name: 'number'}" :value="num">{{ num }}</VTab>
    </VTabs>
    <template v-if="pickerType === 'buttons'">
      <VBtn v-for="num in 10" :key="num" :to="{ name: 'number'}" @click="number = num">{{ num }}</VBtn>
    </template>
    <template v-if="pickerType === 'links'">
      <RouterLink v-for="num in 10" :key="num" :to="{ name: 'number'}" class="mx-3" @click="number = num">{{ num }}</RouterLink>
    </template>
    <RouterView :number="number" />
  </VCard>
</template>

<style scoped lang="scss"></style>
