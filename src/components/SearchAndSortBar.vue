<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-app-bar flat dense>
            <v-text-field
              v-model="localSearchQuery"
              prepend-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @input="filterAndSortParts"
              class="flex-grow-1 pl-4"
            ></v-text-field>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                  <v-icon>mdi-filter-menu</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(option, index) in sortOptions"
                  :key="index"
                  @click="() => handleSort(option.value)"
                >
                  <v-list-item-title>{{ option.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script setup>
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps({
    parts: Array,
    sortOptions: Array,
  });
  
  const emit = defineEmits(['update:parts']);
  
  const localSearchQuery = ref('');
  const selectedSortOption = ref('');
  
  watchEffect(() => {
    const searchLower = localSearchQuery.value.toLowerCase();
    const sortedAndFiltered = props.parts
      .filter(part => part.Model.toLowerCase().includes(searchLower))
      .sort((a, b) => {
        switch (selectedSortOption.value) {
          case 'name_asc': return a.Model.localeCompare(b.Model);
          case 'name_desc': return b.Model.localeCompare(a.Model);
          case 'rank_asc': return a.Rank - b.Rank;
          case 'rank_desc': return b.Rank - a.Rank;
          default: return 0;
        }
      });
    emit('update:parts', sortedAndFiltered);
  });
  
  function filterAndSortParts() {
    // placeholder for now
  }
  
  function handleSort(option) {
    selectedSortOption.value = option;
  }
</script>
