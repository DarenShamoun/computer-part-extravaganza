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
              @input="filterParts"
              class="flex-grow-1 pl-4"
            ></v-text-field>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    parts: Array
  });
  
  const emit = defineEmits(['update:parts']);
  const localSearchQuery = ref('');

  function filterParts() {
    const searchWords = localSearchQuery.value.toLowerCase().split(/\s+/).filter(Boolean); // Split input into words and filter out empty strings

    const filtered = props.parts.filter(part => {
        const partNameWords = `${part.Brand.toLowerCase()} ${part.Model.toLowerCase()}`.split(/\s+/); // Split combined name into words
        // Check if every word in the search input matches at least one word in the part name
        return searchWords.every(searchWord => 
        partNameWords.some(partNameWord => partNameWord.includes(searchWord))
        );
    });
    emit('update:parts', filtered);
  }
</script>
