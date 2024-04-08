<template>
  <v-container>
    <v-row class="pa-4">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="hdd in hdds"
        :key="hdd.Model"
      >
        <v-card class="mx-auto card" hover elevation="12">
          <v-img
            class="white--text"
            :src="'https://via.placeholder.com/500x300?text=HDD'"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
          >
            <div class="d-flex flex-column justify-end pa-4" style="height: 100%;">
              <span class="title">{{ hdd.Brand }} {{ hdd.Model }}</span>
            </div>
          </v-img>
          <v-card-text class="py-4">
            <div class="text-h6 pb-2">Rank: {{ hdd.Rank }}</div>
            <v-chip class="ma-2" color="blue" label small>
              Benchmark Score: {{ hdd.Benchmark }}
            </v-chip>
            <v-chip class="ma-2" color="green" label small>
              Samples Size: {{ hdd.Samples }} samples
            </v-chip>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn :href="hdd.URL" target="_blank" class="more-info-btn" text>More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { usePartsStore } from '../store/partsStore';

const partsStore = usePartsStore();
const hdds = computed(() => partsStore.hdd);
</script>

<style scoped>
.card {
  max-width: 400px;
}
.title {
  font-size: 1.1rem; 
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.v-img {
  position: relative;
}
.v-card-text {
  font-size: 0.9rem;
}
.more-info-btn {
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.1);
}
.more-info-btn:hover {
  background-color: rgba(27, 43, 122, 0.664);
}
@media (min-width: 1920px) { /* For large screens to have 5 columns */
  .xl-2 {
    flex: 0 0 auto;
    width: 20%;
  }
}
</style>
