<template>
  <v-container>
    <search-and-sort-bar
      :parts="usbData"
      @update:parts="handleUpdatedParts"
    />
    <v-row class="pa-4">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="usb in displayedUsbs"
        :key="usb.Model"
      >
        <v-card class="mx-auto card" hover elevation="12">
          <v-img
            class="white--text"
            :src="/*usb.imageUrl ||*/ 'https://via.placeholder.com/500x300?text=USB'"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
          >
            <div class="d-flex flex-column justify-end pa-4" style="height: 100%;">
              <span class="title">{{ usb.Brand }} {{ usb.Model }}</span>
            </div>
          </v-img>
          <v-card-text class="py-4">
            <div class="text-h6 pb-2">Rank: {{ usb.Rank }}</div>
            <v-chip class="ma-2" color="blue" label small>
              Benchmark Score: {{ usb.Benchmark }}
            </v-chip>
            <v-chip class="ma-2" color="green" label small>
              Samples Size: {{ usb.Samples }} samples
            </v-chip>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn :href="usb.URL" target="_blank" class="more-info-btn" text>More Info</v-btn>
            <v-btn color="red" @click="removeUsb(usb)">Remove</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref, computed, watchEffect } from 'vue';
  import SearchAndSortBar from './SearchAndSortBar.vue';
  import { usePartsStore } from '../store/partsStore';

  const partsStore = usePartsStore();
  const usbData = computed(() => partsStore.getPartsByCategory('usb'));
  const displayedUsbs = ref([]);

  watchEffect(() => {
    displayedUsbs.value = usbData.value;
  });

  function handleUpdatedParts(newParts) {
    displayedUsbs.value = newParts;
  }

  function removeUsb(usb) {
    displayedUsbs.value = displayedUsbs.value.filter((part) => part.Model !== usb.Model);
  }
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
  @media (min-width: 1920px) {
    .xl-2 {
      flex: 0 0 auto;
      width: 20%;
    }
  }
</style>
