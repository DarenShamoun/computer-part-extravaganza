<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Home from './components/Home.vue';
</script>
