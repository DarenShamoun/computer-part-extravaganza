import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
//import CpuPage from '../views/CpuPage.vue';
//import GpuPage from '../views/GpuPage.vue';
//import RamPage from '../views/RamPage.vue';
//import SsdPage from '../views/SsdPage.vue';
//import HddPage from '../views/HddPage.vue';
//import UsbPage from '../views/UsbPage.vue';

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
