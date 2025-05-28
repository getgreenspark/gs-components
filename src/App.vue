<script setup lang="ts">
import { TolgeeProvider } from '@tolgee/vue'
</script>

<template>
  <TolgeeProvider>
    <section class="page">
      <h1>Greenspark Component Library</h1>
    </section>
  </TolgeeProvider>
</template>

<style lang="scss">
body {
  font-family: 'Cabin', sans-serif;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 45px;
    font-weight: 700;
  }
}
</style>
