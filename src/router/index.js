import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
//import CpuPage from '../components/CpuPage.vue';
//import GpuPage from '../components/GpuPage.vue';
//import RamPage from '../components/RamPage.vue';
//import SsdPage from '../components/SsdPage.vue';
//import HddPage from '../components/HddPage.vue';
//import UsbPage from '../components/UsbPage.vue';

const routes = [
  { path: '/', component: Home },
  //{ path: '/cpu', component: CpuPage },
  //{ path: '/gpu', component: GpuPage },
  //{ path: '/ram', component: RamPage },
  //{ path: '/ssd', component: SsdPage },
  //{ path: '/hdd', component: HddPage },
  //{ path: '/usb', component: UsbPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
