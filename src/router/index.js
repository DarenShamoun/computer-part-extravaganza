import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import GpuPage from '../components/GpuPage.vue';
import CpuPage from '../components/CpuPage.vue';
import RamPage from '../components/RamPage.vue';
import SsdPage from '../components/SsdPage.vue';
import HddPage from '../components/HddPage.vue';
import UsbPage from '../components/UsbPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/gpu', component: GpuPage },
  { path: '/cpu', component: CpuPage },
  { path: '/ram', component: RamPage },
  { path: '/ssd', component: SsdPage },
  { path: '/hdd', component: HddPage },
  { path: '/usb', component: UsbPage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
