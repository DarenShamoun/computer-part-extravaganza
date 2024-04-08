<template>
    <v-app>
      <v-app-bar app scroll-behavior="elevate" >
        <v-app-bar-title>Top of the Line PC Parts</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn text href="#">GPUs</v-btn>
        <v-btn text href="#">CPUs</v-btn>
        <v-btn text href="#">RAM</v-btn>
        <v-btn text href="#">SSDs</v-btn>
        <v-btn text href="#">HDDs</v-btn>
        <v-btn text href="#">USBs</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">Custom Configurations</v-btn>
          </template>
          <v-list>
            <v-list-item link href="#">Rank 1 Build</v-list-item>
            <v-list-item link href="#">My Current PC</v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-app>
</template>
  
<style scoped>
    .v-app-bar {
    background: linear-gradient(90deg, rgb(91, 118, 238) 0%, rgb(192, 197, 221) 100%);
    }
</style>
  
<script setup>
</script>
