<!-- TheLetterA.vue
  Created by Matthew Ary on 2024-05-31.
-->

<script setup lang="ts">
import { ref } from 'vue';

const letters: string[] = []
for (let i = 0; i < 26; i++) {
  letters.push(String.fromCharCode(65 + i))
}

// const letters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z"
// ]
const pickerType = ref<'tabs' | 'buttons' | 'links'>('links')
</script>

<template>
  <VContainer class="fill-height">
    <VResponsive class="align-centerfill-height mx-auto" max-width="900">
      <VCard variant="outlined">
        <VCardTitle class="d-flex">Hey. So, there's some bugs. <VSpacer /><VBtn :to="{ name: 'hello' }">Can you reproduce it?</VBtn></VCardTitle>
        <VCardSubtitle>There's something wrong with VTab routes and in certain conditions the back button breaks.</VCardSubtitle>
        <VCardText>
          src/pages/index.vue
          <VSelect :items="['tabs', 'buttons', 'links']" v-model="pickerType" />
        </VCardText>
        <VTabs v-if="pickerType === 'tabs'">
          <VTab v-for="letter in letters" :key="letter" :to="{ name: 'letter', params: { letter }}">{{ letter }}</VTab>
        </VTabs>
        <template v-if="pickerType === 'buttons'">
          <VBtn v-for="letter in letters" :key="letter" :to="{ name: 'letter', params: { letter }}">{{ letter }}</VBtn>
        </template>
        <template v-if="pickerType === 'links'">
          <RouterLink v-for="letter in letters" :key="letter" :to="{ name: 'letter', params: { letter }}" class="mx-3">{{ letter }}</RouterLink>
        </template>
        <RouterView />
      </VCard>
    </VResponsive>
  </VContainer>
</template>

<style scoped lang="scss"></style>
