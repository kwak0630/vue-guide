<template>
  <div class="page-guide-nav">
    <h1 class="nav-title">
      <router-link to="/">
          WConcept
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link to="/" class="active">
          Mobile
        </router-link>
      </li>
      <!-- <li>
          <a href="../../pc/list/index.html">Pc</a>
      </li>
      <li>
          <a href="../../mail/list/index.html">Mail</a>
      </li> -->
    </ul>
  </div>
</template>
  
<script>
export default {
  name: 'AsideNav',
}
// import { Options, Vue } from 'vue-class-component';

// @Options({
//     props: {
//         msg: String
//     }
// })
// export default class Gnb extends Vue {
// }
</script>