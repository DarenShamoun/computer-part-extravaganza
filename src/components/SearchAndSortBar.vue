<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-app-bar flat dense >
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-text-field
                        v-model="localSearchQuery"
                        label="Search"
                        single-line
                        hide-details
                        @input="handleSearch"
                        class="flex-grow-1"
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
                            @click="handleSort(option.value)"
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
    import { ref, watch } from 'vue';

    const props = defineProps({
        searchQuery: String,
        onSearch: Function,
    });

    const localSearchQuery = ref(props.searchQuery);
    const sortOptions = [
        { value: 'name_asc', text: 'Name (A - Z)' },
        { value: 'name_desc', text: 'Name (Z - A)' },
        { value: 'rank_asc', text: 'Rank (Lowest first)' },
        { value: 'rank_desc', text: 'Rank (Highest first)' },
    ];

    watch(localSearchQuery, (newQuery) => {
        props.onSearch(newQuery);
    });

    function handleSearch() {
        props.onSearch(localSearchQuery.value);
    }

    function handleSort(optionValue) {
        props.onSort(optionValue);
    }
</script>
