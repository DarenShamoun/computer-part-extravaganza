<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore';
  
  const partsStore = usePartsStore();
  
  const hdds = computed(() => partsStore.getHDD);
</script>

<template>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="hdd in hdds"
          :key="hdd.Model"
        >
          <v-card>
            <v-card-title>{{ hdd.Brand }} {{ hdd.Model }}</v-card-title>
            <v-img
              :src="hdd.imageUrl || 'https://via.placeholder.com/200'"
              height="200px"
              contain
            ></v-img>
            <v-card-subtitle>Benchmark: {{ hdd.Benchmark }}</v-card-subtitle>
            <v-card-text>
              Rank: {{ hdd.Rank }}
            </v-card-text>
            <v-card-actions>
              <v-btn :href="hdd.URL" target="_blank" text>More Info</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
