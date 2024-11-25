<template>
  <div class="page-guide-nav">
    <h1 class="nav-title">
      <router-link to="/">
        Guide
      </router-link>
    </h1>
    <ul class="nav">
      <li
        v-for="nav in navigations"  
        :key="nav.name">
        <router-link
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </router-link> 
      </li>
    </ul>
    
  </div>
</template>
  
<script>
  // eslint-disable-next-line vue/no-export-in-script-setup
  export default {
    data() {
      return {
        navigations: [
          {
            name: 'Color',
            href: '/GuideColor'
          },
          {
            name: 'Font',
            href: '/GuideFont'
          },
          {
            name: 'Text',
            href: '/GuideText'
          },
          {
            name: 'Form',
            href: '/GuideForm'
          },
        ]
      }
    }
  }
</script>