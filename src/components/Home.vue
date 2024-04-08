<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore.js';
  
  const partsStore = usePartsStore();
  
  // Computed property to extract the top-rated part from each category
  const topParts = computed(() => {
    return [
      { category: 'cpu', item: partsStore.cpu[0] },
      { category: 'gpu', item: partsStore.gpu[0] },
      { category: 'hdd', item: partsStore.hdd[0] },
      { category: 'ram', item: partsStore.ram[0] },
      { category: 'ssd', item: partsStore.ssd[0] },
      { category: 'usb', item: partsStore.usb[0] },
    ];
  });
</script>

<template>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="part in topParts"
          :key="part.category"
        >
          <v-card>
            <v-card-title>{{ part.category.toUpperCase() }}</v-card-title>
            <v-img
              :src="part.item.imageUrl || 'https://via.placeholder.com/200'"
              height="200px"
              contain
            ></v-img>
            <v-card-subtitle>{{ part.item.Model }}</v-card-subtitle>
            <v-card-text>
              {{ part.item.Brand }} - Benchmark: {{ part.item.Benchmark }}
            </v-card-text>
            <v-card-actions>
              <v-btn :href="part.item.URL" target="_blank" text>More Info</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
