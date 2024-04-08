<template>
  <v-app-bar app scroll-behavior="elevate">
    <router-link to="/" class="title-link">
      <v-app-bar-title>Top of the Line PC Parts</v-app-bar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/gpu" class="nav-link">
      <v-btn text>GPU</v-btn>
    </router-link>
    <router-link to="/cpu" class="nav-link">
      <v-btn text>CPU</v-btn>
    </router-link>
    <router-link to="/ram" class="nav-link">
      <v-btn text>RAM</v-btn>
    </router-link>
    <router-link to="/ssd" class="nav-link">
      <v-btn text>SSD</v-btn>
    </router-link>
    <router-link to="/hdd" class="nav-link">
      <v-btn text>HDD</v-btn>
    </router-link>
    <router-link to="/usb" class="nav-link">
      <v-btn text>USB</v-btn>
    </router-link>
  </v-app-bar>
</template>

<style scoped>
  .title-link {
    color: #FFF;
    padding-left: 20px;
    text-decoration: none;
  }
  .nav-link > .v-btn {
    color: #FFF;
  }
</style>
