<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore';
  
  const partsStore = usePartsStore();
  
  const usbs = computed(() => partsStore.getUSB);
</script>
  
<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="usb in usbs"
        :key="usb.Model"
      >
        <v-card>
          <v-card-title>{{ usb.Brand }} {{ usb.Model }}</v-card-title>
          <v-img
            :src="usb.imageUrl || 'https://via.placeholder.com/200'"
            height="200px"
            contain
          ></v-img>
          <v-card-subtitle>Rank: {{ usb.Rank }}</v-card-subtitle>
          <v-card-text>
            Benchmark: {{ usb.Benchmark }}
          </v-card-text>
          <v-card-actions>
            <v-btn :href="usb.URL" target="_blank" text>More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
