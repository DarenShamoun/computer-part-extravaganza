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
    }),
    getters: {
        getCPU: (state) => state.cpu,
        getGPU: (state) => state.gpu,
        getHDD: (state) => state.hdd,
        getRAM: (state) => state.ram,
        getSSD: (state) => state.ssd,
        getUSB: (state) => state.usb,
    },
});