<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore';
  
  const partsStore = usePartsStore();
  
  const rams = computed(() => partsStore.getRAM);
</script>

<template>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="ram in rams"
          :key="ram.Model"
        >
          <v-card>
            <v-card-title>{{ ram.Brand }} {{ ram.Model }}</v-card-title>
            <v-img
              :src="ram.imageUrl || 'https://via.placeholder.com/200'"
              height="200px"
              contain
            ></v-img>
            <v-card-subtitle>Benchmark: {{ ram.Benchmark }}</v-card-subtitle>
            <v-card-text>
              Rank: {{ ram.Rank }}
            </v-card-text>
            <v-card-actions>
              <v-btn :href="ram.URL" target="_blank" text>More Info</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
