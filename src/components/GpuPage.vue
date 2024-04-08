<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore';

  const partsStore = usePartsStore();

  const gpus = computed(() => partsStore.gpu);
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="gpu in gpus"
        :key="gpu.Model"
      >
        <v-card>
          <v-card-title>{{ gpu.Brand }} {{ gpu.Model }}</v-card-title>
          <v-img
            :src="'https://via.placeholder.com/200'"
            height="200px"
            contain
          ></v-img>
          <v-card-subtitle>Rank: {{ gpu.Rank }}</v-card-subtitle>
          <v-card-text>
            Benchmark: {{ gpu.Benchmark }}
          </v-card-text>
          <v-card-actions>
            <v-btn :href="gpu.URL" target="_blank" text>More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
