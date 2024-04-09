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
    const searchLower = localSearchQuery.value.toLowerCase();
    const filtered = props.parts.filter(part => part.Model.toLowerCase().includes(searchLower));
    emit('update:parts', filtered);
  }
</script>
