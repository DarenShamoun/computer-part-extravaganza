import { defineStore } from 'pinia';
import CPUData from '../assets/part_data/CPU_UserBenchmarks.json';
import GPUData from '../assets/part_data/GPU_UserBenchmarks.json';
import HDDData from '../assets/part_data/HDD_UserBenchmarks.json';
import RAMData from '../assets/part_data/RAM_UserBenchmarks.json';
import SSDData from '../assets/part_data/SSD_UserBenchmarks.json';
import USBData from '../assets/part_data/USB_UserBenchmarks.json';

export const usePartsStore = defineStore('parts', {
    state: () => ({
        cpu: CPUData,
        gpu: GPUData,
        hdd: HDDData,
        ram: RAMData,
        ssd: SSDData,
        usb: USBData,
        searchQuery: '', // The user's search query
        sortOption: '', // The user's sort option
    }),
    getters: {
        getCPU: (state) => state.cpu,
        getGPU: (state) => state.gpu,
        getHDD: (state) => state.hdd,
        getRAM: (state) => state.ram,
        getSSD: (state) => state.ssd,
        getUSB: (state) => state.usb,
        filteredAndSortedGPU: (state) => {
            let filtered = state.gpu;
      
            // Filter based on the search query
            if (state.searchQuery) {
              filtered = filtered.filter((gpu) =>
                gpu.Model.toLowerCase().includes(state.searchQuery.toLowerCase())
              );
            }
      
            // Sort based on the sort option
            switch (state.sortOption) {
              case 'name_asc':
                filtered.sort((a, b) => a.Model.localeCompare(b.Model));
                break;
              case 'name_desc':
                filtered.sort((a, b) => b.Model.localeCompare(a.Model));
                break;
              case 'rank_asc':
                filtered.sort((a, b) => a.Rank - b.Rank);
                break;
              case 'rank_desc':
                filtered.sort((a, b) => b.Rank - a.Rank);
                break;
            }
      
            return filtered;
        },
    },
    actions: {
        setSearchQuery(query) {
          this.searchQuery = query;
        },
        setSortOption(option) {
          this.sortOption = option;
        },
        // filtered and sorted data for any type of part
        getFilteredAndSortedData(category) {
          let filtered = this[category];
    
          // this filter is just for the search query
          if (this.searchQuery) {
            filtered = filtered.filter((item) =>
              item.Model.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
          }
    
          // this switch is for the sort option
          switch (this.sortOption) {
            case 'name_asc':
              filtered.sort((a, b) => a.Model.localeCompare(b.Model));
              break;
          }
    
          return filtered;
        },
    },
});
