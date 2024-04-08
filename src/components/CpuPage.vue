<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore';
  
  const partsStore = usePartsStore();
  
  const cpus = computed(() => partsStore.getCPU);
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="cpu in cpus"
        :key="cpu.Model"
      >
        <v-card>
          <v-card-title>{{ cpu.Brand }} {{ cpu.Model }}</v-card-title>
          <v-img
            :src="cpu.imageUrl || 'https://via.placeholder.com/200'"
            height="200px"
            contain
          ></v-img>
          <v-card-subtitle>Rank: {{ cpu.Rank }}</v-card-subtitle>
          <v-card-text>
            Benchmark: {{ cpu.Benchmark }}
          </v-card-text>
          <v-card-actions>
            <v-btn :href="cpu.URL" target="_blank" text>More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
