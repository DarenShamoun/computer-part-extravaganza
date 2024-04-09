<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="localSearchQuery"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @input="handleSearch"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="localSortOption"
            :items="sortOptions"
            label="Sort by"
            single-line
            hide-details
            @change="handleSort"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script setup>
    import { ref, watch } from 'vue';

    const props = defineProps({
    searchQuery: String,
    sortOption: String,
    sortOptions: Array,
    onSearch: Function,
    onSort: Function,
    });

    const localSearchQuery = ref(props.searchQuery);
    const localSortOption = ref(props.sortOption);

    watch(localSearchQuery, (newQuery) => {
    if (props.onSearch) {
        props.onSearch(newQuery);
    }
    });

    watch(localSortOption, (newSort) => {
    if (props.onSort) {
        props.onSort(newSort);
    }
    });

    function handleSearch() {
    if (props.onSearch) {
        props.onSearch(localSearchQuery.value);
    }
    }

    function handleSort() {
    if (props.onSort) {
        props.onSort(localSortOption.value);
    }
    }
</script>
  