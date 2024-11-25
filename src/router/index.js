import { createWebHistory, createRouter } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";

import PageList from '@/pages/List/PageList.vue';
import GuideIndex from '@/pages/Guide/GuideIndex.vue';
import GuideColor from '@/pages/Guide/Color/GuideColor.vue';
import GuideFont from '@/pages/Guide/Font/GuideFont.vue';
import GuideText from '@/pages/Guide/Text/GuideText.vue';
import GuideForm from '@/pages/Guide/Form/GuideForm.vue';

const routes = [
  // {
  //   path: "/",
  //   name: "HelloWorld",
  //   component: HelloWorld,
  // },
  {
    path: "/",
    name: "PageList",
    component: PageList,
  },
  {
    path: "/GuideIndex",  // 이동할 Path
    name: "GuideIndex",  // router name
    component: GuideIndex,  // Path로 이동될 Component
  },
  {
    path: "/GuideColor",
    name: "GuideColor",
    component: GuideColor,
  },
  {
    path: "/GuideFont",
    name: "GuideFont",
    component: GuideFont,
  },
  {
    path: "/GuideText",
    name: "GuideText",
    component: GuideText,
  },
  {
    path: "/GuideForm",
    name: "GuideForm",
    component: GuideForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;