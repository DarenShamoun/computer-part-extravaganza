<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore';
  
  const partsStore = usePartsStore();
  
  const ssds = computed(() => partsStore.getSSD);
</script>

<template>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="ssd in ssds"
          :key="ssd.Model"
        >
          <v-card>
            <v-card-title>{{ ssd.Brand }} {{ ssd.Model }}</v-card-title>
            <v-img
              :src="ssd.imageUrl || 'https://via.placeholder.com/200'"
              height="200px"
              contain
            ></v-img>
            <v-card-subtitle>Benchmark: {{ ssd.Benchmark }}</v-card-subtitle>
            <v-card-text>
              Rank: {{ ssd.Rank }}
            </v-card-text>
            <v-card-actions>
              <v-btn :href="ssd.URL" target="_blank" text>More Info</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
