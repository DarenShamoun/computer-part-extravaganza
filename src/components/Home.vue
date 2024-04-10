<script setup>
  import { computed } from 'vue';
  import { usePartsStore } from '../store/partsStore.js';
  
  const partsStore = usePartsStore();
  
  // extract the top-rated part from each category
  const topParts = computed(() => {
    return [
      { category: 'cpu', item: partsStore.cpu[0] },
      { category: 'gpu', item: partsStore.gpu[0] },
      { category: 'ram', item: partsStore.ram[0] },
      { category: 'ssd', item: partsStore.ssd[0] },
      { category: 'hdd', item: partsStore.hdd[0] },
      { category: 'usb', item: partsStore.usb[0] },
    ].map(part => ({
      ...part,
      item: {
        ...part.item,
        imageUrl: /*part.item.imageUrl ||*/ 'https://via.placeholder.com/500x300?text=' + part.category.toUpperCase(),
      }
    }));
  });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <h2>THE top of the line</h2>
          <p>Presenting the highest-ranked PC components in the world right now, across various categories. These parts are the bleeding edge of performance and technology.</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="pa-4">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="part in topParts"
        :key="part.category"
      >
        <v-card class="mx-auto card" hover elevation="12">
          <v-img
            class="white--text align-end"
            :src="part.item.imageUrl"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
          >
            <div class="d-flex flex-column justify-end pa-4 fill-height">
              <span class="title">{{ part.item.Brand }} {{ part.item.Model }}</span>
            </div>
          </v-img>
          <v-card-text class="py-4">
            <div class="text-h6 pb-2">Rank: {{ part.item.Rank }}</div>
            <v-chip class="ma-2" color="blue" label small>
              Benchmark Score: {{ part.item.Benchmark }}
            </v-chip>
            <v-chip class="ma-2" color="green" label small>
              Samples Size: {{ part.item.Samples }} samples
            </v-chip>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn :href="part.item.URL" target="_blank" class="more-info-btn" text>More Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .card {
    max-width: 400px;
  }
  .title {
    font-size: 1.1rem; 
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .align-end {
    align-items: flex-end;
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
  .text-center {
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
    color: #1976D2;
  }
  p {
    max-width: 80%;
    margin: auto;
    line-height: 1.6; 
  }
  @media (min-width: 1920px) { /* For large screens to have 5 columns */
    .xl-2 {
      flex: 0 0 auto;
      width: 20%;
    }
  }
</style>
